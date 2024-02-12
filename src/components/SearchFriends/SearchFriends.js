import { TextField, Typography } from "@mui/material"
import React, { memo } from "react"

import styled from "./SearchFriends.module.scss"

const SearchFriends = memo(({ value, onChange }) => {
	return (
		<div className={styled.searchWrap}>
			<Typography className={styled.searchTitle} variant="h5">
				Поиск Друзей
			</Typography>
			<TextField
				fullWidth
				value={value}
				onChange={(e) => onChange(e.target.value)}
				sx={{
					"& .MuiInputBase-input": {
						height: 40,
						padding: "0 15px",
					},
				}}
			/>
		</div>
	)
})

export default SearchFriends
