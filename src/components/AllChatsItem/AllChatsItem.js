import React from "react"
import styled from "./AllChatsItem.module.scss"
import { Link } from "react-router-dom"
const AllChatsItem = ({ item }) => {
	const lastMessage = item.messages[item.messages.length - 1]?.message
	return (
		<Link to={`/chat/${item.id}`} className={styled.chatWrap}>
			<div>
				<img
					src={
						item.avatar === ""
							? "https://pp.userapi.com/HHVq_wVswoY6FqHA0_E9l04XcONDwc9os7PeDg/gL0NISs2DcQ.png"
							: item.avatar
					}
					alt=""
					className={styled.chatImg}
				/>
			</div>
			<div className={styled.chatInfoWrap}>
				<h5 className={styled.chatInfoName}>{item.user}</h5>
				<span className={styled.chatInfoMsg}>
					{lastMessage ? lastMessage : "Напишите первое сообщение"}
				</span>
			</div>
		</Link>
	)
}

export default AllChatsItem
