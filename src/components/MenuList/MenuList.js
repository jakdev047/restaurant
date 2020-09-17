import React, { Component, Fragment } from 'react'
import { MenuItem } from './MenuItem';

class MenuList extends Component {
    render() {
        const {dishes} = this.props;
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        {
                            dishes.map(item=>{
                                return (
                                    <MenuItem key={item.id} item={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MenuList;
