import React, { Component } from 'react';

import api from '../../services/api';

export default class Main extends Component {

    /**
     * O estado (state) é SEMPRE um objeto.
     */
    state = {
        products: [],
    }

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
        /**
         * Setando os produtos de acordo com o estado.
         */
        this.setState({ products: response.data.docs });
    };

    render() {

        const { products } = this.state;

        return( <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href="#">Acessar</a>
                </article>

        ))}
        </div>)
    }
}