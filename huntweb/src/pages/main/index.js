import React, { Component } from 'react';
import './styles.css';

import api from '../../services/api';

export default class Main extends Component {

    /**
     * O estado (state) é SEMPRE um objeto.
     */
    state = {
        products: [],
        productInfo: {},
        page: 1,
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
    loadProducts = async(page = 1) => {
        const response = await api.get(`/products?page=${page}`);
        /**
         * Setando os produtos de acordo com o estado.
         */

        const { docs, ...productInfo } = response.data;

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        console.log(page)
        
        if (page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {

        const { page, productInfo } = this.state;

        if (page === productInfo.pages ) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    render() {

        const { products, page, productInfo } = this.state;

        return( <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <a href="http://google.com">Acessar</a>
                </article>

        ))}

            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
            </div>
            
        </div>)
    }
}