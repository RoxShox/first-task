import React, { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { userStore } from "../../store/user-store"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import styled from "./Chat.module.scss"
import SendMessageForm from "../../components/SendMessageForm/SendMessageForm"
import { observer } from "mobx-react-lite"
import { Paper, Typography } from "@mui/material"
export const Chat = observer(() => {
	const params = useParams()
	const [user] = useState(userStore)

	const messagesEndRef = useRef(null)

	const curChat = user.chats.find((chat) => chat.id === +params.id) || ""

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [curChat.messages])

	const checkAvatar =
		curChat?.avatar === ""
			? "https://pp.userapi.com/HHVq_wVswoY6FqHA0_E9l04XcONDwc9os7PeDg/gL0NISs2DcQ.png"
			: curChat?.avatar
	return (
		<div className={styled.chatContainer}>
			<div className={styled.chatHeaderWrap}>
				<Link to="/chats" className={styled.chatBackLink}>
					<ArrowBackIosNewIcon />
					<span>Назад</span>
				</Link>
				<Typography variant="h6">{curChat.user}</Typography>
				<div>
					<img className={styled.chatImg} src={checkAvatar} alt="" />
				</div>
			</div>
			<Paper className={styled.chatMsgsBoxWrap}>
				<div className={styled.chatMsgsWrap}>
					{curChat.messages.map((msg) => (
						<div key={msg.id} className={styled.chatMesssageWrap}>
							<div>
								<img
									className={styled.chatImg}
									src={
										msg.fromSelf
											? checkAvatar
											: "https://i.pinimg.com/originals/2e/d8/55/2ed855958e1fb619317b9946f8c5117e.png"
									}
									alt=""
								/>
							</div>
							<p>{msg.message}</p>
						</div>
					))}
					<div ref={messagesEndRef} />
				</div>

				<SendMessageForm id={curChat.id} />
			</Paper>
		</div>
	)
})
