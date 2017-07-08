{/*This component has the modal and gets props from the active meal to get the div to open the modal with no button I passed the show state from here to the main component*/}


const React = require('react');
import { Button, Modal, ButtonToolbar  } from 'react-bootstrap';


class MyModal extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false
    }


  }



  render() {
    return (
      <ButtonToolbar>

        <Modal
          show={this.props.show}
          onHide={this.props.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.day}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img id="modalImg" src={this.props.img} />
           
            <h3>Instructions:</h3>
            <p>{this.props.instructions}</p>
            <br/>
            <h3>Ingredients:</h3>
            <p>{this.props.ingredients[0]}</p>
            <p>{this.props.ingredients[1]}</p>
            <p>{this.props.ingredients[2]}</p>
            <p>{this.props.ingredients[3]}</p>
            <p>{this.props.ingredients[4]}</p>
            <p>{this.props.ingredients[5]}</p>
            <p>{this.props.ingredients[6]}</p>
            <p>{this.props.ingredients[7]}</p>
            <p>{this.props.ingredients[8]}</p>
            <p>{this.props.ingredients[9]}</p>
            <p>{this.props.ingredients[10]}</p>
            <p>{this.props.ingredients[11]}</p>
            <p>{this.props.ingredients[12]}</p>
            <p>{this.props.ingredients[13]}</p>
            <p>{this.props.ingredients[14]}</p>
            <p>{this.props.ingredients[15]}</p>
            <p>{this.props.ingredients[16]}</p>
            <p>{this.props.ingredients[17]}</p>
            <p>{this.props.ingredients[18]}</p>
            <p>{this.props.ingredients[19]}</p> 
          </Modal.Body>
          <Modal.Footer>
 
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

module.exports = MyModal;
