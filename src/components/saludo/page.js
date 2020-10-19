import React from 'react';
import { Col } from 'react-bootstrap';

const Page = props =>
{
    const { nombreMod } = props;

    return (
        <Col md={ 4 }>
            <h1>Hola { nombreMod }</h1>
        </Col>
    );
}

export default Page;