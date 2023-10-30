import "./App.css"

function App() {
	const paragraphElement = (
		<>
			<h2>Heading</h2>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
				facere consectetur consequatur a perspiciatis beatae dolores maiores
				officia in, vel, molestias, aliquam repellat itaque quam!
			</p>
		</>
	)
	return (
		<>
			{paragraphElement} {paragraphElement} {paragraphElement}{" "}
			{paragraphElement} {paragraphElement} {paragraphElement}{" "}
		</>
	)
}

export default App
