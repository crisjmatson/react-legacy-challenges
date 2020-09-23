import React, { Component } from "react";
import { ListGroupItemHeading, ListGroupItem } from "reactstrap";

export default class DisplayAll extends Component {
	again(num) {
		let taskArr = this.props.fullList;
		taskArr.map((task) => {
			if (taskArr.indexOf(task) === num) {
				return (task.complete = !task.complete);
			} else console.log("not... yet");
		});
		return taskArr;
	}

	render() {
		return (
			<ListGroupItem>
				{this.props.fullList.map((tsk) => {
					let num = this.props.fullList.indexOf(tsk);
					return (
						<ListGroupItem key={num}>
							<ListGroupItemHeading>{tsk.name}</ListGroupItemHeading>
							<br />
							<label>complete?</label>
							<br />
							<input
								type="checkbox"
								name="completeTask"
								onChange={() => this.again(num)}
								checked={tsk.complete}
							/>
						</ListGroupItem>
					);
				})}
			</ListGroupItem>
		);
	}
}
