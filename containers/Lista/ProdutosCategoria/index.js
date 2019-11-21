import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';

const PRODUTOS = [
  {
    id: 19239123,
    fotos: ["/static/img/mouse-1.png"],
    titulo: "Mouse Gamer 1",
    preco: 35,
    promocao: 25
  },
  {
    id: 23423467,
    fotos: ["/static/img/mouse-2.png"],
    titulo: "Mouse Gamer 2",
    preco: 55
  },
  {
    id: 123124379,
    fotos: ["/static/img/mouse-3.png"],
    titulo: "Mouse Gamer 3",
    preco: 105,
    promocao: 95
  },
  {
    id: 9634534657,
    fotos: ["/static/img/mouse-4.png"],
    titulo: "Mouse Gamer 4",
    preco: 160,
    promocao: 150
  }
];

class ProdutosCategoria extends Component {
  render(){
    return (
      <div className="container Produtos-Pagina-Inicial flex vertical">
        <Produtos
          produtos = {PRODUTOS}
          itensPorLinha = {4} />
      </div>
    )
  }
}

export default ProdutosCategoria;