
import QRCode from "react-qr-code";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Codigoqr.css';
import Image from 'react-bootstrap/Image';
import {logo} from './Imagepath';
const Codigoqr = () => {

  let [textoCodigo, setTextoCodigo] = useState('');  
  return (
    <>
    <div className="contenedor-principal">
    <Container className="contenedor">
    <Row>
        <Col  className="mb-3">
        <Image src={logo} className="logo" /> 
       
        <h1>Generador de Codigo QR </h1>
       
        </Col>
    </Row>
    <Row>
        <Col className="mb-3"> 
        <FloatingLabel
        controlId="floatingInput"
        label="Ingrese URL"
        className="mb-3"
      >
        <Form.Control value={textoCodigo} onChange={(event) => setTextoCodigo(event.target.value)}/>
      </FloatingLabel>
       
        </Col>
    </Row>
    <Row>
        <Col className="mb-3">
            <Button className="mb-3" variant="info" onClick={()=>setTextoCodigo("")}>Limpiar campo</Button>
            
        </Col>
    </Row>
    <Row >
        <Col className="mb-3 ">
        
        <QRCode value={textoCodigo} className="cuadrado-codigoqr" />
       
        </Col>
    </Row>
    <Row >
        <Col className="mb-3 ">
        
        <p className="creditos">© 2023 Rudy Christian Chavez Ponce</p>
       
        </Col>
    </Row>
    </Container>
    </div>
  
    
     
    </>
  )
}

export default Codigoqr