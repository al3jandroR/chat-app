import Conversations from "./Conversations";
import SearchInput from "./SearchInput"
import LogoutButton from "./LogoutButton";

const Sidebar = () => {
  return (
    <div className="border-r borderslate-500 p-4 flex flex-column">
        <SearchInput/>
        <div className = 'divider px-3'></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar;