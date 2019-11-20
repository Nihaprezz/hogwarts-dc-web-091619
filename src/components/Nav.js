import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<button onClick={props.filterGreasedHogs}>Filter Greased Hogs</button>
			<button onClick={props.sortByName}>Sort By Name</button>
			<button onClick={props.sortByWeight}>Sort By Weight</button>
		</div>
	)
}

export default Nav
