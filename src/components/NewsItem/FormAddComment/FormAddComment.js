import { TextField } from "@mui/material"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import SendIcon from "@mui/icons-material/Send"
import { observer } from "mobx-react-lite"
import { userStore } from "../../../store/user-store"
import styled from "./FormAddComment.module.scss"
const FormAddComment = observer(({ id, innerRef }) => {
	const [user] = useState(userStore)
	const { register, handleSubmit, reset } = useForm({
		defaultValues: {
			comment: "",
		},
	})
	const onSubmit = (val) => {
		user.addComments(val.comment, id)
		reset()
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styled.form}>
			<TextField
				{...register("comment")}
				fullWidth
				inputRef={innerRef}
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

export default FormAddComment
