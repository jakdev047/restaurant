import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

const DisDetails = props => {
    const {selectedDish} =props;
    return (
        <div>
            <Card style={{margin:'10px'}}>
                <CardImg width="100%" alt={selectedDish.name} src={selectedDish.image}  />
                <CardBody>
                    <CardTitle style={{color:'#000'}}>{selectedDish.name}</CardTitle>
                    <p>{selectedDish.description}</p>
                    <p>{selectedDish.price}</p>
                </CardBody>
            </Card>
        </div>
    )
}

export default DisDetails;
