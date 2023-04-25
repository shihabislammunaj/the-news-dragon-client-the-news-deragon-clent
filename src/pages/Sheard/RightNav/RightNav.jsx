import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-5'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Login With Google</Button> 
          <Button variant="outline-secondary"> <FaGithub/>Login With Github</Button> 
  
      <div>
        <h4 className='mt-5'>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook></FaFacebook> FaceBook </ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instagram </ListGroup.Item>
 
    </ListGroup>
      </div>
  

     <QZone></QZone>


     <div>
        <img src={bg} alt="" />
     </div>
  
        </div>




    );
};

export default RightNav;