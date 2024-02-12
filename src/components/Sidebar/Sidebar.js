import React from "react"
import { Link } from "react-router-dom"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import styled from "./Sidebar.module.scss"

const Sidebar = () => {
	return (
		<nav>
			<ul className={styled.menuList}>
				<li className="menu__item">
					<Link className={styled.menuLink} to="/">
						<PersonOutlineIcon />
						<span>Мой Профиль</span>
					</Link>
				</li>
				<li>
					<Link className={styled.menuLink} to="/news">
						<NewspaperIcon />
						<span> Мои Новости</span>
					</Link>
				</li>
				<li>
					<Link className={styled.menuLink} to="/chats">
						<ChatBubbleOutlineIcon />
						<span> Мои Сообщения</span>
					</Link>
				</li>
				<li>
					<Link className={styled.menuLink} to="/friends">
						<PeopleOutlineIcon />
						<span> Мои Друзья</span>
					</Link>
				</li>
				<li>
					<Link className={styled.menuLink} to="/newFriends">
						<GroupAddIcon />
						<span>Добавить Друзей</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Sidebar
