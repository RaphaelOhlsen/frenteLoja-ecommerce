import React from 'react';

export default () => (
  <style jsx global>{`
    
    body {
      margin: 0;
      padding: 0
    }

    body, * {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .flex { display: flex; }
    .flex-1 { flex: 1; }
    .flex-2 { flex: 2; }
    .flex-3 { flex: 3; }
    .flex-4 { flex: 4; }
    .flex-5 { flex: 5; }
    .flex-6 { flex: 6; }

    .flex-center {
      justify-content: center;
      align-items: center;
    }

    .Header {
      max-height: 100px;
    }

    .header-wrapper {
      max-width: 1200px;
      margin: 0 auto;
      width: 100%;
      display: flex;
    }

    @media screen and (max-width: 720px) {
      .header-wrapper {
        flex-direction: column;
      }
      .Header {
        max-height: 200px;
      }
    } 

    .logo {
      max-width: 230px;
    }

    .input-pesquisa {
      font-size: 1rem;
      color: #333;
      padding: 10px 25px;
      width: 80%;
      border: 1px solid #aaa;
      border-right: 0;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

      // margin: 0 10px;
    }

    .button-pesquisa {
      font-size: 2rem;
      padding-right: 10px;
      color: #333;
      background-color: transparent;
      border: 1px solid #aaa;
      border-left: 0;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      cursor pointer;
    }

    .itens-cabecalho {
      padding: 20px 0;
    }

    .item-cabecalho{
      cursor: pointer;
    }

    .item-cabecalho i{
      color: #e87c08;
      font-size: 1.7rem;
      margin: 0 5px;
    }

    .item-cabecalho span {
      color: #777;
      font-size: 14px;
    }

    .item-cabecalho.cart {
      margin-left: 15px;
    }

    .item-cabecalho.cart span {
      font-size: 1rem;
      background-color: #222;
      color: #fff;
      border-radius: 100px;
      padding: 0 5px;
      margin-left: -15px;
      position: relative;
      top: -15px;
    }

  `}</style>
)