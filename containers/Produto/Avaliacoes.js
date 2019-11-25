import React, { Component } from 'react';

export default class Avaliacoes extends Component{
  renderAvaliacoes(){
    return (
      <div className="avaliacoes-items flex horizontal wrap no-wrap-mb">
        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>Ótimo produto, gostei muito do mouse, utilizado para minhas livestreams.</p>
          </div>
          <div className="avalicao-dados flex">
            <div className="avalicao-nome flex-1 flex">
              <small>João Paulo</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>O profuto não durou um mês comigo, o cachorro devorou.</p>
          </div>
          <div className="avalicao-dados flex">
            <div className="avalicao-nome flex-1 flex">
              <small>Gilmar Cunha</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="avaliacao flex-1 flex vertical wrap-3">
          <div className="avaliacao-texto flex-3 flex texto">
            <p>Produto de boa qualidade, gostei da velocidade da entrega.</p>
          </div>
          <div className="avalicao-dados flex">
            <div className="avalicao-nome flex-1 flex">
              <small>Maria José</small>
            </div>
            <div className="avaliacao-pontuacao flex-1 flex">
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>    )
  }

  renderFormularioDeAvaliacoes(){
    return (
      <div className="avaliacoes-form">
        <h4>Envie sua avaliação para o produto:</h4>
        <div className="flex vertical">
          <div className="flex horizontal">
            <label>Pontuação:&nbsp;</label>
            <select>
              <option value="1">1 estrela</option>
              <option value="2">2 estrelas</option>
              <option value="3">3 estrelas</option>
              <option value="4">4 estrelas</option>
              <option value="5">5 estrelas</option>
            </select>
          </div>
          <div className="flex vertical">
            <label>Avaliação:</label>
            <br/>
            <textarea 
              rows="3"
              style={{ resize: "none", width:"100%", maxWidth: "500px"}}
              placeholder="Digite aqui a sua avaliação..."></textarea>
          </div>
          <div>
            <button
              onClick={() => alert("Avaliação enviada")}
              className="btn btn-primary btn-lg">
                <span>Enviar Avaliação</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  render(){
    return (
      <div className="Avaliacoes flex vertical">
        <h2>Avaliações</h2>
        <br/>
        { this.renderAvaliacoes() }
        <br/>
        { this.renderFormularioDeAvaliacoes() }
      </div>
    )
  }
}