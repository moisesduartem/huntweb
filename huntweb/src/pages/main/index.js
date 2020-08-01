import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

    /**
     * Realiza alguma ação assim que o componente é exibido em tela.
     */
    componentDidMount() {
        this.loadProducts();
    }

    /**
     * Funções customizadas DEVEM ser em formato de arrow function, para evitar
     * erros de sobrescrita com o "this".
     */
    loadProducts = async() => {
        const response = await api.get('/products');
        console.log(response.data.docs);
    };

    render() {
        return <h1>
            {this.props.message}
        </h1>
    }
}