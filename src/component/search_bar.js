// import React from 'react';
// const Component = React.Component
import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input />;
// };

class SearchBar extends Component{

	constructor(props) {
		super(props);
		
		this.state = {
			term: ''
		};
	}

	render() {
		// 2 Pass the event handler to the element tht we want to monitor
		// return <input onChange={this.onInputChange}/>; 
		// return <input onChange={(e) => console.log(e.target.value)}/>; 
		return (
			<div>
				<input 
					value={this.state.term}
					onChange={e => this.setState({term: e.target.value})} 
				/>
			
			
			</div>
		);
	}
	//Value of the input: {this.state.term}

	// 1 Declare an event handler
	// onInputChange(e) {
	// 	console.log(e.target.value);
	// }
}






export default SearchBar;