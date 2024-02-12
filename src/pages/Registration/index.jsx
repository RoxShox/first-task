import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import Avatar from "@mui/material/Avatar"

import styles from "./Login.module.scss"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { userStore } from "../../store/user-store"

export const Registration = observer(() => {
	const [user] = useState(userStore)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "vasya@test.ru",
			password: "1234",
			fullName: "VasaPepk",
		},
		mode: "onChange",
	})

	const onSubmit = (val) => {
		user.login(val.email)
		navigate("/")
	}

	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant="h5">
				Создание аккаунта
			</Typography>
			<div className={styles.avatar}>
				<Avatar sx={{ width: 100, height: 100 }} />
			</div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					error={Boolean(errors.fullName?.message)}
					helperText={errors.fullName?.message}
					{...register("fullName", { required: "Укажите полное имя" })}
					className={styles.field}
					label="Полное имя"
					fullWidth
				/>
				<TextField
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register("email", { required: "Укажите почту" })}
					className={styles.field}
					label="E-Mail"
					fullWidth
				/>
				<TextField
					error={Boolean(errors.password?.message)}
					helperText={errors.password?.message}
					{...register("password", { required: "Укажите parol" })}
					className={styles.field}
					label="Пароль"
					fullWidth
				/>
				<Button
					disabled={!isValid}
					type="submit"
					size="large"
					variant="contained"
					fullWidth
				>
					Зарегистрироваться
				</Button>
			</form>
		</Paper>
	)
})
