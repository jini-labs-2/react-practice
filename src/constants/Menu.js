import HomeIcon from '@mui/icons-material/Home';
import Email from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Info from '@mui/icons-material/Info';
import { CenterFocusStrongOutlined, Domain, FormatItalicOutlined, FormatItalicRounded, FormatItalicSharp, FormatItalicTwoTone, Gamepad, LibraryBooks, LibraryBooksOutlined, LibraryBooksRounded } from '@mui/icons-material';

export const SidebarMenus = [
  { name: "home", icon: <HomeIcon />, link: "/" },
  { name: "CIDR", icon: <Domain />, link: "/Cidr" },
  { name: "UUIDv1", icon: <FormatItalicOutlined />, link: "/ids/uuidv1" },
  { name: "UUIDv3", icon: <FormatItalicRounded />, link: "/ids/uuidv3" },
  { name: "UUIDv4", icon: <FormatItalicSharp />, link: "/ids/uuidv4" },
  { name: "UUIDv5", icon: <FormatItalicTwoTone />, link: "/ids/uuidv5" },
  { name: "LID", icon: <LibraryBooks />, link: "/ids/lid" },
  { name: "ULID", icon: <LibraryBooksOutlined />, link: "/ids/ulid" },
  { name: "CUID", icon: <LibraryBooksRounded />, link: "/ids/cuid" },
  { name: "NanoID", icon: <CenterFocusStrongOutlined />, link: "/ids/nanoid" },
  { name: "ShortId", icon: <Gamepad />, link: "/ids/shortid" },
]