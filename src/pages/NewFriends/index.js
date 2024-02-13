import { observer } from "mobx-react-lite"
import React, { useCallback, useState } from "react"
import { userStore } from "../../store/user-store"
import FriendItem from "../../components/FriendItem/FriendItem"
import SearchFriends from "../../components/SearchFriends/SearchFriends"
import { useNavigate } from "react-router-dom"

export const NewFriends = observer(() => {
	const [searchValue, setSearchValue] = useState("")
	const [user] = useState(userStore)
	const navigate = useNavigate()
	const newFriends = user.allFriends.filter((item) => !item.isFriend)
	const searchFriends = newFriends.filter((item) =>
		item.name.toLowerCase().includes(searchValue)
	)
	const handleChangeValue = useCallback((searchString) => {
		setSearchValue(searchString)
	}, [])

	return (
		<div style={{ flexGrow: 1 }}>
			<SearchFriends onChange={handleChangeValue} value={searchValue} />
			{searchFriends.length > 0 ? (
				searchFriends.map((item) => <FriendItem key={item.id} item={item} />)
			) : (
				<h2 style={{ textAlign: "center" }}>
					По вашему поиску друзья не найдены
				</h2>
			)}
		</div>
	)
})
