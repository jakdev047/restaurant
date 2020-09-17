import React, { Component, Fragment } from 'react';
import { Search } from '../components/Search/Search';

class Home extends Component {

    state = {
        keyword: ''
    }

    handleChange = e => {
        let keyword = e.target.value;
        console.log(keyword);
        this.setState({
            keyword
        });
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <Search className="py-3" handleChange={this.handleChange}/>
                </div>
            </Fragment>
        )
    }
};

export default Home;
