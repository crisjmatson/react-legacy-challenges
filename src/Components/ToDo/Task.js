import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Button,
	Label,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

export default class Task extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showTasks: true,
			taskAdd: "unchanged",
			taskList: [],
		};
	}

	addTasks(event) {
		event.preventDefault();
		this.state.taskList.push({ name: this.state.taskAdd, complete: false }); //task added to end of arr
		console.log(this.state.taskList);
	}

	listDisplay() {
		this.state.taskList.map((tsk) => {
			return <li key={tsk}>{tsk}</li>;
		});
	}

	render() {
		return (
			<div>
				<Form onSubmit={(event) => this.addTasks(event)}>
					<Label>TASK ENTRY: </Label>
					<br />
					<input
						type="text"
						onChange={(event) => this.setState({ taskAdd: event.target.value })}
						required
					/>
					<br />
					<Button type="submit">submit</Button>
				</Form>
				<Button onClick={() => this.setState({ showTasks: true })}>
					view all tasks
				</Button>
				{this.state.showTasks ? (
					<ul>
						<ListItems fullList={this.state.taskList} />
					</ul>
				) : (
					<span></span>
				)}
			</div>
		);
	}
}

function ListItems(props) {
	function completeTask(taskName) {
		console.log(taskName);
	}
	return (
		<ListGroupItem>
			{props.fullList.map((tsk) => {
				return (
					<ListGroupItem key={tsk.name}>
						{tsk.name}
						<br />
						<label>complete?</label>
						<br />
						<input
							type="checkbox"
							name="completeTask"
							onChange={props.onChange}
							checked={tsk.complete}
						/>
					</ListGroupItem>
				);
			})}
		</ListGroupItem>
	);
}
