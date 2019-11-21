import React from 'react';

const DadosDaLoja = () => (
  <div className="flex-1 dados-da-loja">
    <div>
      <h2>Entre em Contato</h2>
      <br/>
    </div>
    <p className="loja-nome">Nome: LOJA IT</p>
    <p className="loja-cnpj">CNPJ: 12.345.678/0001-22</p>
    <p className="loja-email">Email: <a href="mailto:">raphael@gmail.com</a></p>
    <p className="loja-telefones">Telefones:</p>
    <p className="loja-telefones">&nbsp;&nbsp;<a href="phone:">(27) 1234-5678</a></p>
    <p className="loja-telefones">&nbsp;&nbsp;<a href="phone:">(27) 1234-5678</a></p>
    <p className="loja-telefones">&nbsp;&nbsp;<a href="phone:">(27) 1234-5678</a></p>
    <p className="loja-endereco">Rua Teste, 123 - Bairro - Centro</p>
    <p className="loja-cidade">Vila Velha/ES - 29078-350</p>
  </div>
)

export default DadosDaLoja;