import React from "react"
import { Link } from "react-router-dom"
import styled from "./NavBar.module.css"
const NavBar = () => {
	return (
		<nav className={styled.navigation}>
			<ul className={styled.navigationList}>
				<li className={styled.navigationItem}>
					<Link className={styled.navigationLink} to="/">
						Главная
					</Link>
				</li>
				<li>
					<Link className={styled.navigationLink} to="/login">
						Логин
					</Link>
				</li>
				<li>
					<Link className={styled.navigationLink} to="/registration">
						Регистрация
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
