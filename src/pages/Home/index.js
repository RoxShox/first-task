import { observer } from "mobx-react-lite"
import React, { useState } from "react"
import { userStore } from "../../store/user-store"
import { Link } from "react-router-dom"
import { Avatar, Paper, Typography } from "@mui/material"
import styled from "./Home.module.scss"

export const Home = observer(() => {
	const [user] = useState(userStore)
	const myFriends = user.allFriends.filter((el) => el.isFriend)
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
					src="https://i.pinimg.com/originals/2e/d8/55/2ed855958e1fb619317b9946f8c5117e.png"
					className={styled.myAvatar}
				/>
			</div>
			<Typography variant="h5">Моя Страница</Typography>
			<Paper className={styled.friendsBox}>
				<div>
					<Typography variant="span">Мои Друзья: </Typography>
					<Typography variant="span">{myFriends.length}</Typography>
				</div>
				<div className={styled.friendsItemsWrap}>
					{myFriends.slice(0, 4).map((friend) => (
						<Link className={styled.friendItemWrap} to={`/person/${friend.id}`}>
							<Avatar src={friend.avatar} />
							<span>{friend.name.split(" ")[0]}</span>
						</Link>
					))}
				</div>
			</Paper>
		</Paper>
	)
})
