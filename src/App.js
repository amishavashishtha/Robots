import React ,{Component} from 'react';
import CardList from '../Components/CardList';
// import {Robots} from './Robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll.js';
import './App.css';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component{
	constructor(){
		super()
		this.state = {
			Robots : [],
			searchField : ''
		}

	}

	componentDidMount(){

		fetch(`https://jsonplaceholder.typicode.com/users`)
		.then(response =>response.json())
		.then(users => {this.setState({Robots:users})});
	}

	onSearchChange = (event) =>{
		this.setState ({searchField : event.target.value})
	}

		
			render() {
					const filteredRobots=this.state.Robots.filter(Robots =>{
						return Robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
					})
					if (this.state.Robots.length===0) {
				         return <h1>Loading</h1>
			          }

		            else{
					return (
					<div className = 'tc'>
					<h1 className='f1'>RoobooFriends</h1>
					<SearchBox searchChange = {this.onSearchChange} />
					    <Scroll>
					    <ErrorBoundary
					       <CardList Robots = {filteredRobots} />
					    </ErrorBoundary>
					    </Scroll>
					</div>


		);
	}
}

	
}
export default App;