import React, { useState } from "react"
import TextField from "../ui/TextField/TextField"

import styled from "./Form.module.css"
import { Link } from "react-router-dom"
import Button from "../ui/Button/Button"
const Form = ({ btnText, linkText, link }) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const handleSubmit = (e) => {
		e.preventDefault()
		alert(`Ваш логин - ${email}, Ваш пароль - ${password}`)
		setEmail("")
		setPassword("")
	}

	return (
		<form onSubmit={handleSubmit} className={styled.form}>
			<TextField
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="email"
				placeholder="Enter your Email"
				name="email"
				className={styled.input}
			/>
			<TextField
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="Enter your Password"
				name="password"
				className={styled.input}
			/>
			<button className={styled.formBtn}>{btnText}</button>

			<Link className={styled.formLink} to={link}>
				{linkText}
			</Link>
		</form>
	)
}

export default Form
