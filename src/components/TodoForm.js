import React from 'react';
import style from './TodoList.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	addText(event) {
		this.setState(
			{value: event.target.value}
		)
	}

	render() {
		return (
			<div className={style.addTask}>
				<button className={style.addTaskButton} type="button" onClick={() => this.props.add(this.state.value)}>+</button>
				<input className={style.addTaskInput} type="text" onChange={event => this.addText(event)} value={this.state.value} />
			</div>
		)
	}
}

export default TodoForm;