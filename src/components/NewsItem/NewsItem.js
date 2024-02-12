import React, { useRef } from "react"
import ChatBubbleIcon from "@mui/icons-material/ChatBubble"
import styled from "./NewsItem.module.scss"
import FormAddComment from "./FormAddComment/FormAddComment"
import NewsItemComment from "./NewsItemComment/NewsItemComment"
import { Paper } from "@mui/material"
const NewsItem = ({ item }) => {
	const inputRef = useRef(null)

	const clickChatBtn = () => {
		inputRef.current.focus()
		console.log(inputRef)
	}

	return (
		<Paper className={styled.item}>
			<span className={styled.itemDescr}>{item.description}</span>
			<img className={styled.itemImg} src={item.image} alt="" />
			<button className={styled.itemMessage} onClick={clickChatBtn}>
				<ChatBubbleIcon />
				<span className={styled.itemMessageLength}>{item.comments.length}</span>
			</button>
			<Paper className={styled.commentsWrap}>
				{item.comments.map((comment) => (
					<NewsItemComment key={comment.id} item={comment} />
				))}
			</Paper>
			<FormAddComment id={item.id} innerRef={inputRef} />
		</Paper>
	)
}

export default NewsItem
