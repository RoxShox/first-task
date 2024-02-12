import React from "react"
import styled from "../NewsItem.module.scss"
const NewsItemComment = ({ item }) => {
	return (
		<div className={styled.commentWrap}>
			<span>{item.user}</span>
			<p>{item.comment}</p>
		</div>
	)
}

export default NewsItemComment
