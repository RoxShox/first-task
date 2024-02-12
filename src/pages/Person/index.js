import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { userStore } from "../../store/user-store"
import { Link, useParams } from "react-router-dom"
import { Button, Paper, Typography } from "@mui/material"
import styled from "./Person.module.scss"

export const Person = observer(() => {
	const params = useParams()
	const [user] = useState(userStore)
	const curPerson = user.allFriends.find((friend) => friend.id === +params.id)

	return (
		<Paper
			sx={{
				"&.MuiPaper-root  ": {
					width: 500,
					margin: "0 auto",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					rowGap: 3,
					padding: 2,
					borderRadius: 4,
				},
			}}
		>
			<div>
				<img
					src={
						curPerson?.avatar === ""
							? "https://pp.userapi.com/HHVq_wVswoY6FqHA0_E9l04XcONDwc9os7PeDg/gL0NISs2DcQ.png"
							: curPerson?.avatar
					}
					className={styled.personAvatar}
				/>
			</div>

			<Typography variant="h5">{curPerson.name}</Typography>
			<Button variant="contained">
				<Link
					to={`/chat/${curPerson.id}`}
					onClick={() =>
						user.addNewChat(curPerson.name, curPerson.avatar, curPerson.id)
					}
					className={styled.personMsgBtn}
				>
					Отправить Сообщение
				</Link>
			</Button>
			{curPerson.isFriend ? (
				<Button onClick={() => user.removeFriend(curPerson.id)} color="error">
					Удалить из друзей
				</Button>
			) : (
				<Button onClick={() => user.addFriend(curPerson.id)} variant="outlined">
					Добавить в друзья
				</Button>
			)}
		</Paper>
	)
})
