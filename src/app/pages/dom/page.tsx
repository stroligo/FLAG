'use client'; /* permite interaçoes do cliente */

/* como usando js vanila precisa rodar dentro do react */
import React, { useEffect } from 'react';

export default function PagesDom() {
  useEffect(() => {
    const texto = document.querySelector('#principal');
    const lista = document.querySelector('#lista');
    const todosBolded = document.querySelectorAll('.bolded');

    /*  Por questão de segurança do tsx valida as variaveis para sumir o aviso. */
    if (texto && lista && todosBolded.length > 0) {
      /*  Testes de leitura e seleção */
      console.log(texto.innerHTML);
      console.log(todosBolded.length); /* quantidade de elementos */
      console.log(todosBolded[0].innerHTML); /*  buscar de um especific */
      /* mostra infos de tamanho posicao entre outros */
      console.log(texto.getBoundingClientRect());

      /*  Testes de adicao de atributos */

      lista.setAttribute('role', 'list');
      lista.setAttribute('aria-label', 'My favorite fruits');
      console.log(lista.getAttribute('role'));

      lista.setAttribute(
        'style',
        'background:red;display: flex; gap: 1rem; flex-direction: column; list-style: none; padding: 0;',
      ); // Adiciona a classe "cor1"

      const listaitens = document.querySelectorAll('#lista > *');

      for (let i = 0; i < listaitens.length; i++) {
        // Verifica se o índice é ímpar
        listaitens[i].classList.add('cor1'); // Adiciona a classe "cor1"
        listaitens[i].innerHTML = 'div ' + i;
        console.log(listaitens[i].innerHTML);
      }
    }
  }, []);

  return (
    <section>
      <style>
        {`
          .cor1 {
            background-color: gray;
            padding: 0;
            margin: 0;
          }
        `}
      </style>
      <h1>Estudos sobre a DOM</h1>
      <div id="principal">Texto dentro da div Principal</div>

      <span className="bolded">texto bolder 1</span>
      <span className="bolded">texto bolder 2</span>

      <ul className="" id="lista">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
