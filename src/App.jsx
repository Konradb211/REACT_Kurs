import "./App.css"
import { Link } from "./components/Link"
import { Text } from "./components/Text"

function App() {
	return (
		<>
			<h1>Nasza strona!</h1>
			<main>
				<Link>Super strona numer: 1</Link>
				<Text />
				<Link>Super strona numer: 2</Link>
			</main>
		</>
	)
}

export default App
