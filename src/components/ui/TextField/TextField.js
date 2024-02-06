import React from "react"

const TextField = ({ type, placeholder, name, className, onChange, value }) => {
	return (
		<input
			type={type}
			name={name}
			value={value}
			placeholder={placeholder}
			className={className}
			onChange={onChange}
		/>
	)
}

export default TextField
