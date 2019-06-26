import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

	get getList() {
		const { data, remove } = this.props;
		const dataList = data.map(item => 
		<p className={style.listItem} id={item.id} key={item.id}>
			{item.text}
			<button onClick={() => remove(item.id)} type="button" className={style.btnDelete}>X</button>
		</p>);
		return dataList;
	}

	render() {
		return (
			<div>
				{this.getList}
			</div>
		)
	}
}

export default TodoList;