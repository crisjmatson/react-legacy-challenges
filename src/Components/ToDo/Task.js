import React, { Component } from "react";
import { Form, Button, Label, Input } from "reactstrap";
import DisplayAll from "./DisplayAll";

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTasks: false,
			taskAdd: "",
			taskList: [],
			render: false,
		};
	}

	addTasks(event) {
		event.preventDefault();
		this.state.taskList.push({ name: this.state.taskAdd, complete: false }); 
	}

	/* 	updateList(list) {
		let compare = this.state.taskList;
		if (list === compare) {
			return;
		} else {
			this.setState({ taskList: [list] });
			console.log("list state updated!");
			return;
		}
	} */

	render() {
		return (
			<div onClick={() => this.setState({ render: !this.state.render })}>
				<Form onSubmit={(event) => this.addTasks(event)}>
					<h2>
						<Label>TASK ENTRY: </Label>
					</h2>
					<Input
						type="text"
						width=""
						onChange={(event) => this.setState({ taskAdd: event.target.value })}
						required
					/>
					<br />
					<Button className="challButton" type="submit">
						submit
					</Button>
				</Form>
				{this.state.showTasks ? (
					<Button
						className="challButton"
						onClick={() => this.setState({ showTasks: !this.state.showTasks })}
					>
						hide tasks
					</Button>
				) : (
					<Button
						className="challButton"
						onClick={() => this.setState({ showTasks: !this.state.showTasks })}
					>
						view tasks
					</Button>
				)}
				{this.state.showTasks ? (
					<ul>
						<DisplayAll fullList={this.state.taskList} />
					</ul>
				) : (
					<span></span>
				)}
			</div>
		);
	}
}
