export const Link = ({ text, shouldOpenNewTab }) => {
	const target = shouldOpenNewTab ? "_blank" : ""
	const rel = shouldOpenNewTab ? "noopener noreferrer" : ""
	return (
		<>
			<a href='https://zrozumiecreact.pl' target={target} rel={rel}>
				{text}
			</a>
		</>
	)
}
