import React, { useState } from "react"
import { userStore } from "../../store/user-store"
import { observer } from "mobx-react-lite"
import NewsItem from "../../components/NewsItem/NewsItem"
import styled from "./News.module.scss"
import { useNavigate } from "react-router-dom"
export const News = observer(() => {
	const [user] = useState(userStore)
	const navigate = useNavigate()

	return (
		<div className={styled.wrap}>
			{user.newsArr.map((item) => (
				<NewsItem item={item} key={item.id} />
			))}
		</div>
	)
})
