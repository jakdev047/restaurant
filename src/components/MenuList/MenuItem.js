import React, {useState} from 'react';
import { Button, Card, CardBody, CardImg, CardTitle, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CommentForm from '../CommentForm/CommentForm';
import LoadComments from './LoadComments';

const MenuItem = props => {

    const {item,comments} = props;

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const comment = comments.filter(comment=>{
        return comment.dishId === item.id;
    })

    return (
        <div className="col-md-4 col-sm-6">

            <Card style={{margin:'10px'}}>
                <CardImg width="100%" alt={item.name} src={item.image}  />
                <CardBody>
                    <CardTitle style={{color:'#000'}}>{item.name}</CardTitle>
                    <Button color="primary" onClick={toggle}>Details</Button>
                </CardBody>
            </Card>

            {/* modal */}
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>{item.name}</ModalHeader>
                <ModalBody>
                    <CardImg width="100%" alt={item.name} src={item.image}  />
                    <CardBody>
                        <CardTitle style={{color:'#000'}}>{item.name}</CardTitle>
                        <p>{item.description}</p>
                        <h4>${item.price}</h4>
                    </CardBody>
                    <h3>Comments</h3>

                    <LoadComments comment={comment}/>

                    <hr/>

                    <CommentForm  dishId={item.id} commentId={comments.length} />

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
};

export default MenuItem;
