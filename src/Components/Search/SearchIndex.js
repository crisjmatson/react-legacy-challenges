import React, { Component } from "react";
import { Input } from "reactstrap";

class SearchIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			things: [
				"pen",
				"marker",
				"eraser",
				"notebook",
				"pencil",
				"scissors",
				"highlighter",
				"stapler",
				"paper clip",
				"binder",
				"hole punch",
				"laminator",
				"laminating sheets",
				"protective sheets",
				"index cards",
			],
			results: [],
		};
	}

	componentWillMount() {
		this.searchFunction("");
	}

	searchFunction(term) {
		let termReg = new RegExp("(.?" + term + ".?)");
		const filterRes = this.state.things.filter((item) => item.match(termReg));
		this.setState({ results: filterRes });
	}

	render() {
		return (
			<div>
				<Input
					placeholder="Search Here"
					type="text"
					onChange={(e) => this.searchFunction(e.target.value)}
				/>
				<h3>Results:</h3>
				{this.state.results.map((res) => {
					return <li key={res}>{res}</li>;
				})}
			</div>
		);
	}
}

export default SearchIndex;
