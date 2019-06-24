import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={style.infoWrapper}>
				<h1 className={style.taskTitle}>ToDo App - Webpack + React</h1>
				<p className={style.taskNumber}>Tasks to finish: {this.props.data.length}</p>
			</div>
		)
	}
}

export default Title;