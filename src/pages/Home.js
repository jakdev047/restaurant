import React, { Component, Fragment } from 'react';
import MenuList from '../components/MenuList/MenuList';
import { Search } from '../components/Search/Search';

// data
import data from '../data/dishes';
import comments from '../data/comments';

class Home extends Component {

    state = {
        keyword: '',
        dishes: data,
        comments,
        selectedDish: null
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

    onSelectDish = dish => {
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        document.title = "Home";
        const {dishes} = this.state;
        return (
            <Fragment>
                <div className="container">
                    <Search handleChange={this.handleChange}/>
                    <MenuList dishes={dishes} onSelectDish={this.onSelectDish} selectedDish={this.state.selectedDish} comments={comments} />
                </div>
            </Fragment>
        )
    }
};

export default Home;
