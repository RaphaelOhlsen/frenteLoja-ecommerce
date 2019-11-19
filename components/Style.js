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

    .flex-center {
      justify-content: center;
      align-itens: center;
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
        max-height: 150px;
      }
    } 
    
    .wrap-pesquisa {
      height: 40px;
    }

    .input-pesquisa {
      font-size: 1rem;
      color: #333;
      padding: 10px 25px;
      width: 90%;
      border: 1px solid #aaa;
      border-radius: 10px;
    }

    .button-pesquisa {
      margin-left: -35px;
      font-size: 1.2 rem;
      color: #333;
      background-color: transparent;
      border: 0;
      cursor pointer;
    }
  `}</style>
)