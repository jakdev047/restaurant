import React, { Component, Fragment } from 'react'
import DisDetails from './DisDetails';
import { MenuItem } from './MenuItem';

class MenuList extends Component {
    render() {
        const {dishes,onSelectDish,selectedDish} = this.props;

        let dishDetail = null;
        if(selectedDish != null) {
            dishDetail = <DisDetails selectedDish= {selectedDish} />
        }

        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                {
                                    dishes.map(item=>{
                                        return (
                                            <MenuItem key={item.id} item={item} onSelectDish={onSelectDish} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-6">
                            {dishDetail}
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default MenuList;
