import React, { Component } from "react";
import { Button, Card, CardImg } from "reactstrap";

class DogIndex extends Component {
	constructor(props) {
		super(props);
		this.state = { url: "" };
	}
	newFetch() {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((response) => response.json())
			.then((json) =>
				json.status !== "success" ? () => this.newFetch() : json.message
			)
			.then((random) => this.setState({ url: random }))
			.catch((err) => console.log(err));
	}

	componentWillMount() {
		this.newFetch();
	}

	render() {
		return (
			<div>
				<Card>
					<Button onClick={() => this.newFetch()}>fetch, dog!</Button>
					<CardImg top width="70%" src={this.state.url} alt="fetching.." />
				</Card>
				<br />
			</div>
		);
	}
}
export default DogIndex;
