import React, { useState } from "react"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import styles from "./Login.module.scss"
import { userStore } from "../../store/user-store"
import { observer } from "mobx-react-lite"

export const Login = observer(() => {
	const [user] = useState(userStore)
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange",
	})

	const onSubmit = async (val) => {
		user.login(val.email)
		navigate("/")
	}

	return (
		<Paper classes={{ root: styles.root }}>
			<Typography classes={{ root: styles.title }} variant="h5">
				Вход в аккаунт
			</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					className={styles.field}
					label="E-Mail"
					error={Boolean(errors.email?.message)}
					helperText={errors.email?.message}
					{...register("email", { required: "Укажите почту" })}
					fullWidth
				/>
				<TextField
					className={styles.field}
					label="Пароль"
					fullWidth
					{...register("password", { required: "Укажите пароль" })}
					helperText={errors.password?.message}
					error={Boolean(errors.password?.message)}
				/>
				<Button type="submit" size="large" variant="contained" fullWidth>
					Войти
				</Button>
			</form>
		</Paper>
	)
})
