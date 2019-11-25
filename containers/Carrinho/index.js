import React, { Component } from 'react';

import ListadeProdutos from './ListaDeProdutos';
import DadosdoCarrinho from './DadosdoCarrinho';

export default class CarrinhoContainer extends Component {
  render(){
    return (
      <div className="container Carrinho">
        <h2>Detalhes do Pedido</h2>
        <br/>
        <ListadeProdutos />
        <DadosdoCarrinho />
      </div>
    )
  }
}