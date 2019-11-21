import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Produto from '../../containers/Produto';
import Rodape from '../../containers/Rodape';
export default class ProdutoPage extends Component {
  render(){
    return(
      <Layout title="Mouse Gamer 1 | LOJA IT -  Melhores produtos de Tecnologia" >
        <Cabecalho />
        <Produto />
        <Rodape />
      </Layout>
    )
  }
}