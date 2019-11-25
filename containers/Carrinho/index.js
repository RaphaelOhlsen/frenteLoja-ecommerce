import React, { Component } from 'react';

import ListadeProdutos from './ListadeProdutos';
import DadosdoCarrinho from './DadosdoCarrinho';

class CarrinhoContainer extends Component {
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