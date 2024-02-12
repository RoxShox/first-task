import React, { useState } from "react"
import { Link } from "react-router-dom"
import styled from "./FriendItem.module.scss"
import { observer } from "mobx-react-lite"
import { userStore } from "../../store/user-store"
import { Button, Paper, Typography } from "@mui/material"
const FriendItem = observer(({ item }) => {
	const [user] = useState(userStore)
	return (
		<Paper className={styled.friendItemWrap}>
			<Link to={`/person/${item.id}`} className={styled.friendItem}>
				<img src={item.avatar} alt="" className={styled.itemImg} />
				<Typography variant="h6" className={styled.itemName}>
					{item.name}
				</Typography>
			</Link>
			<div className={styled.friendItemBtnsWrap}>
				{item.isFriend ? (
					<Button onClick={() => user.removeFriend(item.id)} color="error">
						Удалить из друзей
					</Button>
				) : (
					<Button onClick={() => user.addFriend(item.id)} variant="outlined">
						Добавить в друзья
					</Button>
				)}
				<Button variant="contained">
					<Link
						to={`/chat/${item.id}`}
						onClick={() => user.addNewChat(item.name, item.avatar, item.id)}
						className={styled.friendItemMsgBtn}
					>
						Написать сообщение
					</Link>
				</Button>
			</div>
		</Paper>
	)
})

export default FriendItem
