import "normalize.css"
import { Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Registration } from "./pages/Registration"
import { News } from "./pages/News"
import { Home } from "./pages/Home"
import Sidebar from "./components/Sidebar/Sidebar"
import { Header } from "./components/Header"
import { Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { userStore } from "./store/user-store"
import { useState } from "react"
import { Friends } from "./pages/Friends"
import { Person } from "./pages/Person"
import { NewFriends } from "./pages/NewFriends"
import { AllChats } from "./pages/AllChats"
import { Chat } from "./pages/Chat"
import { NotFound } from "./pages/NotFound"

const App = observer(() => {
	const [user] = useState(userStore)

	return (
		<div className="App">
			<Header />
			<Container maxWidth="lg" className="main__container">
				{user.isAuth && <Sidebar />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/news" element={<News />} />
					<Route path="/chats" element={<AllChats />} />
					<Route path="/chat/:id" element={<Chat />} />
					<Route path="/friends" element={<Friends />} />
					<Route path="/newFriends" element={<NewFriends />} />
					<Route path="/person/:id" element={<Person />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Registration />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Container>
		</div>
	)
})

export default App
