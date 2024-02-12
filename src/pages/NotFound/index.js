import React from "react"
import { Link } from "react-router-dom"

export const NotFound = () => {
	return (
		<div style={{ width: "100%" }}>
			<h1 style={{ textAlign: "center" }}>Page Not found</h1>
			<Link
				style={{
					fontSize: "20px",
					color: "blue",
					textAlign: "center",
					display: "block",
				}}
				to="/"
			>
				Вернитесь на главную страницу
			</Link>
		</div>
	)
}
