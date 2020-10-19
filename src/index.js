import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row } from 'react-bootstrap';
import Saludo from './components/saludo/index';
import 'bootstrap/dist/css/bootstrap.min.css';

const saludos = 
[
    'Miguel', 'Julio', 'Glo', 'Kike', 'Lalo'
];

ReactDOM.render(
    <React.StrictMode>
        <div>
            <Container>
                <Row>
                    { saludos.map((data, key) => <Saludo key={ key } nombre={ data } /> ) }
                </Row>
            </Container>
        </div>
    </React.StrictMode>,
document.getElementById('root'));