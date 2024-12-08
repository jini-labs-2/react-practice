import "./App.css";
import HomeIcon from '@mui/icons-material/Home';
import Email from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const sidebarItems = [
  { name: "home", icon: <HomeIcon />, link: "/" },
  { name: "about", icon: <AnalyticsIcon />, link: "/about" },
  { name: "email", icon: <Email />, link: "/email" },
  { name: "access", icon: <Email />, link: "/access" },
]

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
      </div>
      <div className="menu">
        <ul>
          {sidebarItems ? sidebarItems.map(item => {
            return(
              <li key={item.name}>
                <a href={item.link}>
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              </li>
          )}) : null}
        </ul>
      </div>
    </div>
  );
}
