import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {fetchDishes,fetchComments} from '../data/actions/menu';

// component
import MenuList from '../components/MenuList/MenuList';
// import { Search } from '../components/Search/Search';
import Loading from '../components/Loading/Loading';
import { Alert } from 'reactstrap';

class Home extends Component {
    state = {
        keyword: '',
        selectedDish: null
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    handleChange = e => {}

    onSelectDish = dish => {
        this.setState({
            selectedDish: dish
        })
    }

    render() {
        document.title = "Home";
        const {dishes,isLoading,isCommentLoading,dishErrorMsg} = this.props;

        if(isLoading) {
            return (
                <Loading />
            );
        }
        else if( dishErrorMsg != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5">
                            <Alert color="danger text-center">{dishErrorMsg}</Alert>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <Fragment>
                    <div className="container">
                        {/* <Search handleChange={this.handleChange}/> */}
                        <MenuList 
                            dishes={dishes} 
                            onSelectDish={this.onSelectDish} 
                            selectedDish={this.state.selectedDish} 
                            comments={this.props.comments}
                            isCommentLoading={isCommentLoading}
                        />
                    </div>
                </Fragment>
            )
        }
    }
};

const mapStateToProps = state => {
    return {
        dishes: state.menu.dishes,
        comments: state.menu.comments,
        isLoading: state.menu.isLoading,
        isCommentLoading: state.menu.isCommentLoading,
        dishErrorMsg: state.menu.dishErrorMsg
    }
}

export default connect(mapStateToProps,{fetchDishes,fetchComments})(Home);
