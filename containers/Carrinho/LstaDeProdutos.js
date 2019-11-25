import React, { Component } from 'react';

const PRODUTOS = [
  {
    id: 19239123,
    fotos: ["/static/img/mouse-1.png"],
    titulo: "Mouse Gamer 1 - M",
    precoUnitario: 25,
    quantidade: 1
  },
  {
    id: 23423467,
    fotos: ["/static/img/mouse-2.png"],
    titulo: "Mouse Gamer 2 - G",
    precoUnitario: 55,
    quantidade: 1
  }
];

class ListaDeProdutos extends Component {

  renderCabecalhoCarinho(){
    return (
      <div className="no-mb-flex flex">
        <div className="flex-6"></div>
        <div className="headline flex-1 flex flex-center">
          <h3>Quantidade</h3>
        </div>
        <div className="headline flex-1 flex flex-center">
          <h3>Preço Unitário</h3>
        </div>
        <div className="headline flex-1 flex flex-center">
          <h3>Preço Total</h3>
        </div>
        <div className="flex-1"></div>
      </div>
    )
  }

  renderProduto(item){
    const foto = item.fotos[0];
    const nome = item.titulo;
    const { quantidade, precoUnitario } = item;
    return (
      <div>
        
      </div>
    )
  }

  renderProdutos(){
    return PRODUTOS.map{item => this.renderProduto(item)}
  }

  render(){
    return (
      <div className="Lista-de-Podutos flex vertical">
        { this.renderCabecalhoCarrinho() }
        { this.renderProdutos() }
      </div>
    )
  }
}

export default ListaDeProdutos;