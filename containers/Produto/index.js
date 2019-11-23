import React, { Component } from 'react';

import Hero from './Hero';
import Descricao from './Descricao';
import Avaliacoes from './Avaliacoes';
import ProdutosRealacionados from './ProdutosRelacionados';

export default class Produto extends Component {
  render(){
    return (
      <div className="container-big Produto">
        <Hero />
        <Descricao />
        <Avaliacoes />
        <ProdutosRealacionados />
      </div>
    )
  }
}