import React from "react"
import Form from "../../components/Form/Form"
import styled from "./LoginPage.module.css"
const LoginPage = () => {
	return (
		<div>
			<h1 className={styled.loginTitle}>Логин</h1>
			<Form
				linkText="Ещё не зарегистрировались? "
				btnText="Войти"
				link="/registration"
			/>
		</div>
	)
}

export default LoginPage
