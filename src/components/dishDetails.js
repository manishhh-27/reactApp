import React ,{ Component} from 'react';
import { Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';
 

class DishDetails extends Component {
    constructor(props){
        super(props);
        this.state={
             
        };
    }
    render(){
    
            if(this.props.selectedDish != null)
            return(
                <Card>
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                    <CardBody>
                      <CardTitle>{this.props.selectedDish.name}</CardTitle>
                      <CardText>{this.props.selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    
        
    }
}

export default DishDetails;