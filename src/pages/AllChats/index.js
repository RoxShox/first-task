import React, { useState } from "react"
import { userStore } from "../../store/user-store"
import { observer } from "mobx-react-lite"
import AllChatsItem from "../../components/AllChatsItem/AllChatsItem"
import styled from "./AllChats.module.scss"

export const AllChats = observer(() => {
	const [user] = useState(userStore)
	return (
		<div className={styled.chatsWrap}>
			{user.chats.map((el) => (
				<AllChatsItem key={el.id} item={el} />
			))}
		</div>
	)
})
