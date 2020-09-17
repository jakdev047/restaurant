import React from 'react';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';

export const MenuItem = props => {
    const {item} = props;
    return (
        <div className="col-sm-6">
            <Card style={{margin:'10px'}}>
                <CardImg width="100%" alt={item.name} src={item.image}  />
                <CardBody>
                    <CardTitle style={{color:'#000'}}>{item.name}</CardTitle>
                    <Button color="primary" onClick={()=>props.onSelectDish(item)}>Details</Button>
                </CardBody>
            </Card>
        </div>
    )
}
