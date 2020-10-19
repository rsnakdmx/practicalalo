import React from 'react'
import Page from './page';

const Saludo = props =>
{
    const { nombre } = props;

    return <Page nombreMod={ nombre.toUpperCase() } />;
}

export default Saludo;