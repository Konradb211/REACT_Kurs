import "./App.css"
import { PersonInfo } from "./components/PersonInfo"

function App() {
	const jan = {
		name: "Jan",
		lastName: "Kowalski",
		mail: "j.kow@gmail.com",
		tel: "+48 888 000 111",
	}
	const janina = {
		name: "Janina",
		lastName: "Janinowksa",
		mail: "janina.kow@gmail.com",
		tel: "+48 666 000 111",
	}

	return (
		<>
			<PersonInfo />
		</>
	)
}

export default App
