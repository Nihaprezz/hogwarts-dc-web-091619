import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import CardContainer from '../container/CardContainer'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super()

    this.state = {
      allhogs: hogs
    }
  }

  filterGreasedHogs = () => {
    let allHogs = this.state.allhogs
    let filteredHogs = allHogs.filter(eachHog => {
        return eachHog.greased === true
    })
  
    this.setState({
      allhogs: filteredHogs
    })
  }

  sortByName = () => {
    let currentHogs = this.state.allhogs

    let sorted = currentHogs.sort((a,b) => {
      return a.name > b.name ? 1 : -1
    })
  
    this.setState({
      allhogs: sorted
    })
  }

  sortByWeight = () => {
    let currentHogs = this.state.allhogs

    let weightSort = currentHogs.sort((a,b) => {
      return a.weight > b.weight ? 1 : -1
    })

    this.setState({
      allhogs: weightSort
    })
  
    }
 
  

  render() {
    return (
      <div className="App">
          < Nav 
          filterGreasedHogs={this.filterGreasedHogs}
          sortByName={this.sortByName}
          sortByWeight={this.sortByWeight}
          />
          < CardContainer hogs={this.state.allhogs} />
      </div>
    )
  }
}

export default App;
