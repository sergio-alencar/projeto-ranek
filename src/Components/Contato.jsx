import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title='Ranek | Contato' description='Entre em contato' />
      <img src={foto} alt='Máquina de escrever' />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>
            <a
              href='mailto:sergiofalencar@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              sergiofalencar@gmail.com
            </a>
          </li>
          <li>
            <a
              href='https://wa.me/5531994396187/'
              target='_blank'
              rel='noreferrer'
            >
              +55 31 99439-6187
            </a>
          </li>
          <li>R. Ali Perto, 123</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
