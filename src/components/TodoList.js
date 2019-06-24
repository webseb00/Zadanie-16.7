import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {

		const dataList = this.props.data.map(item => 
		<p className={style.listItem} id={item.id} key={item.id}>
			{item.text}
			<button onClick={() => this.props.delete(item.id)} type="button" className={style.btnDelete}>X</button>
		</p>)

		return (
			<div className={style.listItemWrapper}>
				{dataList}
			</div>
		)
	}
}

export default TodoList;