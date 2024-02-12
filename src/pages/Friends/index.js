import { observer } from "mobx-react-lite"
import React, { useCallback, useState } from "react"

import { userStore } from "../../store/user-store"
import FriendItem from "../../components/FriendItem/FriendItem"
import SearchFriends from "../../components/SearchFriends/SearchFriends"
import { useNavigate } from "react-router-dom"

export const Friends = observer(() => {
	const [searchValue, setSearchValue] = useState("")
	const [user] = useState(userStore)
	const navigate = useNavigate()
	const myFriends = user.allFriends.filter((item) => item.isFriend)
	const searchFriends = myFriends.filter((item) =>
		item.name.toLowerCase().includes(searchValue)
	)
	const handleChangeValue = useCallback((searchString) => {
		setSearchValue(searchString)
	}, [])
	if (!user.isAuth) {
		navigate("/login")
	}
	return (
		<div style={{ flexGrow: 1 }}>
			<SearchFriends onChange={handleChangeValue} value={searchValue} />
			{searchFriends.length > 0 ? (
				searchFriends.map((item) => <FriendItem key={item.id} item={item} />)
			) : (
				<h2 style={{ textAlign: "center" }}>Не удалось найти друзей!</h2>
			)}
		</div>
	)
})
