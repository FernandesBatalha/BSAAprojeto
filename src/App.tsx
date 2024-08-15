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
          <p>Atuamos em diversas frentes, desde a neutralização de ameaças biológicas até a realização de missões de resgate em áreas afetadas por ataques bioterroristas. Além disso, investigamos incidentes relacionados ao uso de armas biológicas, trabalhando em conjunto com governos e outras agências para coordenar respostas eficazes. A organização também oferece treinamento especializado para forças de segurança, desenvolve tecnologias de combate ao bioterrorismo e atua no desenvolvimento de estratégias de contenção e proteção contra surtos.</p>
        </section>
        <section id="monsters" style={sectionStyle}>
          <h2>Monstros</h2>
          <p>Ao longo dos jogos de Resident Evil, a BSAA enfrentou diversas ameaças bioterroristas, incluindo monstros criados por experimentos genéticos. Em Resident Evil 5, Chris Redfield e Sheva Alomar combateram o Uroboros, um parasita que transformava seus hospedeiros em mutantes poderosos. Também enfrentaram os Majini, aldeões infectados pelo parasita Las Plagas, e o Executioner Majini, um inimigo imponente e armado.

Em Resident Evil 6, a BSAA lutou contra o Haos, uma criatura gigantesca criada com o C-vírus, além dos J'avo, soldados humanos que se transformavam em mutantes adaptáveis. Eles também enfrentaram o Ogroman, um monstro gigante, e Iluzija, uma serpente camuflada mortal. Em Revelations 2, um membro da própria BSAA, Pedro Fernandez, foi infectado e se transformou em um mutante, destacando o risco constante que a organização enfrenta em sua luta contra o bioterrorismo.</p>
        </section>
        <section id="contact" style={sectionStyle}>
          <h2>Contato</h2>
          <p>Entre em contato conosco.</p>
          <ul>
            <li>Chris Redfield - (555) 123-4567</li>
            <li>Jill Valentine - (555) 234-5678</li>
            <li>Sheva Alomar - (555) 345-6789</li>
            <li>Piers Nivans - (555) 456-7890</li>
            <li>Rebecca Chambers - (555) 567-8901</li>
            <li>Clive R. O'Brian - (555) 678-9012</li>
            <li>Jessica Sherawat - (555) 789-0123)</li>
            <li>Keith Lumley - (555) 890-1234</li>
            <li>Quint Cetcham - (555) 901-2345</li>
            <li>Parker Luciani - (555) 012-3456</li>
          </ul>
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


