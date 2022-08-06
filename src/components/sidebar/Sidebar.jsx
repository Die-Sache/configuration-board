import "./sidebar.css";
import { Dashboard, Home, Telegram } from '@mui/icons-material';
import SidebarLink from '../sidebarLink/SidebarLink';

function Sidebar() {
    return (
        <div className="sideBar">
            <SidebarLink text="Home" Icon={Home} />
            <SidebarLink text="DisGram" Icon={Telegram} />
        </div>
    )
}

export default Sidebar;