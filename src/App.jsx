import { useState } from "react"
import "./App.css"

function App() {
	const [click, setClick] = useState(0)
	const handleButtonClick = () => {
		setClick(prevClick => prevClick + 1)
	}
	return (
		<>
			<h1>{click}</h1>
			<button onClick={handleButtonClick}>Kliknij na mnie</button>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
				unde neque ipsam eligendi numquam natus, dolor iure ab facere
				consequuntur praesentium eaque nisi architecto harum autem ea ut
				voluptate sunt.
			</p>
		</>
	)
}

export default App
