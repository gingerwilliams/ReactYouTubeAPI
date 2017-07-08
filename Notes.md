
> npm install
> npm start
```


node_modules/.bin/webpack-dev-server --https

https://localhost:8080/

//Notes:
-Downward Data Flow: Only the most parent component in an application should be responsible for fetching data. (index.js)

-Passing data from the parent to child components by defining a property (prop) (passing props)
parent.js -- <VideoList videos={this.state.videos} />
child.js --
const VideoList = (props) => {
	const videos = props.videos;
}

-In a functional component the (props) object is an argument
 In a class based component props are available anywhere in any method we define as this.props 

*Stay away from for loops asmuch as possible. Use built in iterators instead (Map)
 var array = [1,2,3];
 array.map //returns an empty function
 array.map(function(number){return number * 2}); //returns [2, 4, 6, 8]

 **Good for building lists in react
   array.map(function(number){return '<div>' + number + '</div>'}); //returns ["<div>1</div>", "<div>2</div>", "<div>3</div>", "<div>4</div>"]

-list items need a unique identifier key={item.id} //example key={video.etag}

-Do i expect this new component to need to maintain any kind of state.

-Spinners or Loading icons should be on the parent component not all components


