import React, { Component, Fragment } from 'react';
import MenuList from '../components/MenuList/MenuList';
import { Search } from '../components/Search/Search';

// data
import data from '../data/dishes';

class Home extends Component {

    state = {
        keyword: '',
        dishes: data
    }

    handleChange = e => {
        let keyword = e.target.value;
        const results = [...this.state.dishes].filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()));
        if(results) {
            this.setState({
                keyword,
                dishes: results
            });
        }
    }

    render() {
        const {dishes} = this.state;
        return (
            <Fragment>
                <div className="container">
                    <Search handleChange={this.handleChange}/>
                    <MenuList dishes={dishes}/>
                </div>
            </Fragment>
        )
    }
};

export default Home;
