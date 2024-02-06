import React, { useEffect, useState } from "react"
import styled from "./MainPage.module.css"

const MainPage = () => {
	const [year, setYear] = useState(new Date().getFullYear())

	const updateYear = () => {
		setYear((prev) => prev + 1)
	}
	useEffect(() => {}, [])

	return (
		<div className={styled.yearWrap}>
			<p className={styled.year}>{year}</p>
			<button onClick={updateYear} className={styled.btnUpdate}>
				Обновление года
			</button>
		</div>
	)
}

export default MainPage
