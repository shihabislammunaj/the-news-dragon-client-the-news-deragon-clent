import React from 'react';
 
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Sheard/LeftNav/LeftNav';
import RightNav from '../pages/Sheard/RightNav/RightNav';
import Header from '../pages/Sheard/Header/Header';
import Footer from '../pages/Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
       
      <Row>
        <Col lg={3}>
            <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
            
            <h2>Mani content commming soon</h2>
        </Col>
        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;