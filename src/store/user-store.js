import { makeAutoObservable } from "mobx"
import { news } from "../api/news"
import { v4 as uuidv4 } from "uuid"
import { friends } from "../api/friends"
import { chats } from "../api/chats"
class UserStore {
	user = ""
	isAuth = false
	allFriends = friends
	newsArr = news
	chats = chats
	count = 0
	constructor() {
		makeAutoObservable(this)
	}

	login(userName) {
		this.isAuth = true
		this.user = userName
	}
	logout = () => {
		this.isAuth = false
	}
	addComments(comment, newsId) {
		this.newsArr = this.newsArr.map((news) =>
			news.id === newsId
				? {
						...news,
						comments: [
							...news.comments,
							{ id: uuidv4(), comment, user: "Див Мок" },
						],
				  }
				: news
		)
	}

	addFriend = (id) => {
		this.allFriends = this.allFriends.map((el) =>
			el.id === id ? { ...el, isFriend: true } : el
		)
	}

	removeFriend(id) {
		this.allFriends = this.allFriends.map((el) =>
			el.id === id ? { ...el, isFriend: false } : el
		)
	}
	addNewChat(userName, avatar, id) {
		const newChat = {
			id,
			user: userName,
			avatar,
			messages: [],
		}
		const findChat = this.chats.find((chat) => chat.id === id)

		if (findChat) {
			return
		} else {
			this.chats.push(newChat)
		}
	}

	sendMessage(msg, id) {
		this.chats = this.chats.map((chat) =>
			chat.id === id
				? {
						...chat,
						messages: [
							...chat.messages,
							{ id: uuidv4(), fromSelf: false, message: msg },
						],
				  }
				: chat
		)
	}

	takeMessage(id) {
		this.chats = this.chats.map((chat) =>
			chat.id === id
				? {
						...chat,
						messages: [
							...chat.messages,
							{ id: uuidv4(), fromSelf: true, message: "OK" },
						],
				  }
				: chat
		)
	}
}

export const userStore = new UserStore()
