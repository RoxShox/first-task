import React, { useState } from "react"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import styles from "./Header.module.scss"
import Container from "@mui/material/Container"

import { observer } from "mobx-react-lite"
import { userStore } from "../../store/user-store"

export const Header = observer(() => {
	const [user] = useState(userStore)

	return (
		<div className={styles.root}>
			<Container maxWidth="lg">
				<div className={styles.inner}>
					<Link className={styles.logo} to="/">
						<div>KORENEV NETWORK</div>
					</Link>
					<div className={styles.buttons}>
						{user.isAuth ? (
							<>
								<Link to="/login">
									<Button
										onClick={user.logout}
										variant="contained"
										color="error"
									>
										Выйти
									</Button>
								</Link>
							</>
						) : (
							<>
								<Link to="/login">
									<Button variant="outlined">Войти</Button>
								</Link>
								<Link to="/register">
									<Button variant="contained">Создать аккаунт</Button>
								</Link>
							</>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
})
