import { define } from "remount";
import Header from "./components/Header";
import RoomList from "./components/RoomList";
import MessageList from "./components/MessageList";
import Home from "./pages/Home";

define({ "main-page": Home });

define({ "header-component": Header });
define({ "room-list-component": RoomList });
define({ "message-list-component": MessageList });
