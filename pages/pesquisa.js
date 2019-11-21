import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import ProdutosPesquisa from '../containers/Lista/ProdutosPesquisa';
import Rodape from '../containers/Rodape';
export default class Pesquisa extends Component {
  render(){
    return(
      <Layout title="Resultados para Mouse | LOJA IT -  Melhores produtos de Tecnologia" >
        <Cabecalho />
        <ProdutosPesquisa />
        <Rodape />
      </Layout>
    )
  }
}