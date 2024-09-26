import React from 'react';
import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';

function Projects() {
  const location = useLocation();
  let message = '';

  // Verifica se o estado contém a mensagem
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div>
      <h1>Meus projetos</h1>
      {/* Renderiza a mensagem se houver */}
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
