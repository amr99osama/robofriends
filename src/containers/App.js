import React, { Component } from 'react';
import CardList from '../componets/CardList'
import SearchBox from '../componets/SearchBox'
import Scroll from '../componets/Scroll'
import Copyrights from '../componets/Copyrights'
import ErrorBoundry from '../componets/ErrorBoundry'

import '../containers/App.css'

class App extends Component {
    //lifecyle of react 
    // 1-Mounting ==> constructot , getDrivedStatefromProps , Render , componentDidMount
    // 2- update ==> static getderivedstatefromprops , shouldComponentUpdate(), render() getSnapshotBeforeUpdate(),componentDidUpdate()
    // 3-unmounting ==> 

    constructor() {
        super();
        console.log("Constructor")
        this.state = {
            Robots: [],
            SearchField: ''
        }

    }

    componentDidMount() {
        console.log("DidMount")
        fetch('https://jsonplaceholder.typicode.com/users').then(respone => respone.json())
            .then(users => { this.setState({ Robots: users }) })
    }
    onSearchChange = (event) => {
        //console.log(event.target.value);
        this.setState({ SearchField: event.target.value })
    }

    render() {
        const { Robots, SearchField } = this.state
        const filteredData = Robots.filter(robots => {
            return robots.name.toLowerCase().includes(SearchField.toLowerCase())
        })
        console.log("Render")
        if (this.state.Robots.length == 0) {
            return (<h1 className='main-header f1 tc'>Loading ....</h1>)
        }
        else {
            return (
                <div className="tc" >
                    <h1 className="main-header f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList Robots={filteredData}></CardList>
                        </ErrorBoundry>
                    </Scroll>
                    <Copyrights></Copyrights>
                </div>
            )
        }
    }
}

export default App