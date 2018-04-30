import React, { Component } from 'react';
import MyList from './MyList.js';
import ExtraInfo from './ExtraInfo.js';
import './App.css';

class App extends Component {
	state = {selectedCity: ''}
	/*constructor(props) {
		super(props);
		this.state = {selectedCity: ''};
		// bind
	}*/
	changeCity = newCity => {
		this.setState({ selectedCity: newCity });
	}
	render() {
		const myList = [
			'Göteborg', 'Stockholm', 'Malmö', 'Huskvarna'
		];
		return (
			<div className="app">
				inte tomt
				<MyList list={myList} handleChangeCity={this.changeCity} />
				<ExtraInfo city={this.state.selectedCity} />
			</div>
		);
	}
}

export default App;
