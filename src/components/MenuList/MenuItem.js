import React from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';

export const MenuItem = ({item}) => {
    console.log(item);
    return (
        <div className="col-md-4 col-sm-6">
            <Card style={{margin:'10px'}}>
                <CardImg width="100%" alt={item.name} src={item.image}  />
                <CardBody>
                    <CardTitle style={{color:'#000'}}>{item.name}</CardTitle>
                </CardBody>
            </Card>
        </div>
    )
}
