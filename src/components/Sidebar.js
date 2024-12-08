import "../assets/css/App.css";
import "../assets/css/Logo.css";
import { Link, useLocation } from "react-router-dom";
import { SidebarMenus } from "../constants/Menu";
import Logo from "./Logo";

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Logo />
      <div className="menu">
        <ul>
          {SidebarMenus ? SidebarMenus.map(item => {
            return(
              <li key={item.name}
                className={location.pathname === item.link ? "sidebar_active" : ""}
              >
                <Link to={item.link}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
          )}) : null}
        </ul>
      </div>
    </div>
  );
}
