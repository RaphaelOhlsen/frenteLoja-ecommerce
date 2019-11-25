import React, { Component } from 'react';

import ListadeProdutos from './ListaDeProdutos';
import DadosDoCarrinho from './DadosDoCarrinho';

export default class CarrinhoContainer extends Component {
  render(){
    return (
      <div className="container Carrinho">
        <h2>Detalhes do Pedido</h2>
        <br/>
        <ListadeProdutos />
        <DadosDoCarrinho />
      </div>
    )
  }
}