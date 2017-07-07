// import React from 'react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './component/search_bar';

const API_KEY = 'AIzaSyABWMvyRnGperVUyvtwvpJ7q1f6LBtwM3s';

// YTSearch({key:API_KEY,term:'surfboards'},function(data){
// console.log(data);
// });

//Create a new compoenent. This component should produce some HTML
// const App = () => {
// 	return(
// 		<div>
// 			<SearchBar />
// 		</div>
// 	);
// }



class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};

		YTSearch({key:API_KEY,term:'surfboards'},(videos) => {
			this.setState({
				//videos:videos
				videos
			});
		});
	}

	render(){
		return(
			<div>
				<SearchBar />
			</div>
		);
	}
}

//Take this components generated HTML and put it on the page(DOM)

ReactDOM.render(
	<App/>, 
	document.querySelector('.container')
);

