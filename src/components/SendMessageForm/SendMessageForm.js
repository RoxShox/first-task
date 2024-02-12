import { TextField } from "@mui/material"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { userStore } from "../../store/user-store"
import { observer } from "mobx-react-lite"
import SendIcon from "@mui/icons-material/Send"
import styled from "./SendMessageForm.module.scss"
const SendMessageForm = observer(({ id }) => {
	const [user] = useState(userStore)
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			message: "",
		},
	})
	const onSubmit = (val) => {
		if (val.message === "") {
			return
		}
		user.sendMessage(val.message, id)
		reset()

		setTimeout(() => {
			user.takeMessage(id)
		}, 1500)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
			<TextField
				{...register("message")}
				fullWidth
				sx={{
					"& .MuiInputBase-input": {
						height: 30,
						padding: "0 15px",
					},
				}}
			/>
			<button className={styled.formBtn}>
				<SendIcon />
			</button>
		</form>
	)
})

export default SendMessageForm
