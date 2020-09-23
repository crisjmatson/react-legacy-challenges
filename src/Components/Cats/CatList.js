import React from "react";

export default function CatList(props) {
	let catArray = props.cats.map((cat) => {
		return <li key={cat}>{cat}</li>;
	});
	return (
		<div>
			<div>
				<ul>{catArray}</ul>
			</div>
		</div>
	);
}
