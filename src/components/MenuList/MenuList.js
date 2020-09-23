import React, { Component, Fragment } from 'react';
import MenuItem from './MenuItem';

class MenuList extends Component {
    render() {
        const {dishes,comments} = this.props;

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                {
                                    dishes.map(item=>{
                                        return (
                                            <MenuItem key={item.id} item={item} comments={comments} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MenuList;
