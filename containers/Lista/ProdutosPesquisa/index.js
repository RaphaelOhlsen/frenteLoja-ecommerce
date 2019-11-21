import React, { Component } from 'react';
import Paginacao from '../../../components/Paginacao';

import Produtos from '../../../components/Listas/Produtos';

const PRODUTOS = [
  { id: 1, fotos: ["/static/img/mouse-1.png"], titulo: "Mouse Gamer 1", preco: 35,promocao: 25 },
  { id: 2, fotos: ["/static/img/mouse-2.png"], titulo: "Mouse Gamer 2", preco: 55 },
  { id: 3, fotos: ["/static/img/mouse-3.png"], titulo: "Mouse Gamer 3", preco: 105, promocao: 95 },
  { id: 4, fotos: ["/static/img/mouse-4.png"], titulo: "Mouse Gamer 4", preco: 160, promocao: 150},
  { id: 5, fotos: ["/static/img/mouse-1.png"], titulo: "Mouse Gamer 1", preco: 35,promocao: 25 },
  { id: 6, fotos: ["/static/img/mouse-2.png"], titulo: "Mouse Gamer 2", preco: 55 },
  { id: 7, fotos: ["/static/img/mouse-3.png"], titulo: "Mouse Gamer 3", preco: 105, promocao: 95 },
  { id: 8, fotos: ["/static/img/mouse-4.png"], titulo: "Mouse Gamer 4", preco: 160, promocao: 150},
  { id: 9, fotos: ["/static/img/mouse-1.png"], titulo: "Mouse Gamer 1", preco: 35,promocao: 25 },
  { id: 10, fotos: ["/static/img/mouse-2.png"], titulo: "Mouse Gamer 2", preco: 55 },
  { id: 11, fotos: ["/static/img/mouse-3.png"], titulo: "Mouse Gamer 3", preco: 105, promocao: 95 },
  { id: 12, fotos: ["/static/img/mouse-4.png"], titulo: "Mouse Gamer 4", preco: 160, promocao: 150},
  { id: 13, fotos: ["/static/img/mouse-1.png"], titulo: "Mouse Gamer 1", preco: 35,promocao: 25 },
  { id: 14, fotos: ["/static/img/mouse-2.png"], titulo: "Mouse Gamer 2", preco: 55 },
  { id: 15, fotos: ["/static/img/mouse-3.png"], titulo: "Mouse Gamer 3", preco: 105, promocao: 95 },
  { id: 16, fotos: ["/static/img/mouse-4.png"], titulo: "Mouse Gamer 4", preco: 160, promocao: 150}
];

class ProdutosPesquisa extends Component {
  state = { atual: 0 }
  render(){
    return (
      <div className="container Categoria-Produtos">
        <br/><br/>
        <div className="flex flex-center">
          <h1>Resultados para: Mouse</h1>
        </div>
        <Produtos
          produtos = {PRODUTOS}
          itensPorLinha = {4} />
        <Paginacao 
          atual={this.state.atual || 0}
          total={PRODUTOS.length *4}
          limite={PRODUTOS.length}
          onClick={(numeroAtual) => this.setState({ atual: numeroAtual })} />
      </div>
    )
  }
}

export default ProdutosPesquisa;