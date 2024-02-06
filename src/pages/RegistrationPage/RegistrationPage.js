import React from "react"
import Form from "../../components/Form/Form"
import styled from "./RegistrationPage.module.css"

const RegistrationPage = () => {
	return (
		<div>
			<h1 className={styled.registrationTitle}>Регистрация</h1>
			<Form linkText="Уже есть аккаунт? " btnText="Регистрация" link="/login" />
		</div>
	)
}

export default RegistrationPage
