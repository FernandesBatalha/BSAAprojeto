import React from 'react';
import Header from './components/Header';
import minhaImagem from './assets/New Project.jpg';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main style={mainStyle}>
        <section id="about" style={sectionStyle}>
          <h2>Sobre Nós</h2>
          <p>
            A B.S.A.A. (Aliança de Segurança e Avaliação em Bioterrorismo) é uma organização multinacional de combate ao bioterrorismo que foi formada para investigar, prevenir e combater incidentes após o fim da Umbrella Corporation. A B.S.A.A. foi formada inicialmente pela Federação das Companhias Farmacêuticas, onde a Tricell tinha grande representatividade.
          </p>
          <p>
            São oito diferentes divisões da B.S.A.A., cada uma responsável por monitorar e atuar em uma diferente parte do mundo. Todas as divisões atuam como Forças Especiais sob a jurisdição das Nações Unidas.
          </p>
        </section>
        <img src={minhaImagem} alt="Descrição da imagem" style={imageStyle} />
        <section id="services" style={sectionStyle}>
          <h2>Serviços</h2>
          <p>Confira os nossos serviços incríveis.</p>
        </section>
        <section id="contact" style={sectionStyle}>
          <h2>Contato</h2>
          <p>Entre em contato conosco.</p>
        </section>
      </main>
    </div>
  );
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
};

const sectionStyle: React.CSSProperties = {
  width: '100%',
  maxWidth: '800px',
  textAlign: 'left',
  flex: '1 1 100%',
  fontSize: '24px', // Aumentando o tamanho da fonte
  lineHeight: '1.6', // Melhorando a legibilidade com espaçamento entre linhas
};

const imageStyle: React.CSSProperties = {
  width: '40vw',
  maxWidth: '1000px',
  height: 'auto',
  borderRadius: '8px',
  flex: '1 1 40%',
};

export default App;
