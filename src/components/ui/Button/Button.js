import React, { useState } from "react"

const Button = ({ text, className }) => {
	const [colorState, setColorState] = useState(null)

	const handleClickBtn = () => {
		let letters = "0123456789ABCDEF"
		let color = "#"
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)]
		}
		setColorState(color)
	}
	return (
		<button
			className={className}
			onClick={handleClickBtn}
			style={{ background: `${colorState}` }}
		>
			{text}
		</button>
	)
}

export default Button
