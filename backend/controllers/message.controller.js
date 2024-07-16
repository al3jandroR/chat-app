import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;
        const {id:recieverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, recieverId],
            },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, recieverId],
            });
        }

        const newMessage = new Message({
            senderId,
            recieverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY HERE

        //await conversation.save();
        //await newMessage.save();

        // this will run in parrallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({newMessage});

    } catch (error) {
        console.log("error in sendMessage controller", error.message);
        res.status(500).json({error: "something went wrong"});
        
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id:usertoChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, usertoChatId],
            },
        }).populate("messages");  // not reference but actual messages

        if(!conversation){
            return res.status(200).json({messages: []});
        }

        const messages = conversation.messages;

        res.status(200).json({messages: conversation.messages});

    } catch (error) {
        console.log("error in getMessages controller", error.message);
        res.status(500).json({error: "something went wrong"});
    }
};