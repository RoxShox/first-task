import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage/MainPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage"
import NavBar from "./components/NavBar/NavBar"
import Button from "./components/ui/Button/Button"
import "normalize.css"
import styled from "./App.module.css"

function App() {
	return (
		<div className="App">
			<NavBar />

			<Button text="Смена цвета кнопки" className={styled.btnChangeColor} />

			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/registration" element={<RegistrationPage />} />
			</Routes>
		</div>
	)
}

export default App
