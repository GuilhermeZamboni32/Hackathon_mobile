import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  // Função simplificada apenas para navegação
  const handleLogin = (e) => {
    e.preventDefault(); // Evita o recarregamento da página padrão do form
    navigate('/perfil'); // Navega diretamente para o perfil
  };

  return (
    <div className="login-page">
      
      {/* Área Superior (Branca) */}
      <div className="login-content">
        <h2 className="login-title">Entrar Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="login-input"
              placeholder="Digite seu email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              className="login-input"
              placeholder="Digite sua senha"
            />
          </div>

          <button className="login-btn" type="submit">
            Logar
          </button>
        </form>

        <p className="signup-text">
          Não tem uma conta?{' '}
          <span onClick={() => navigate('/cadastro')} className="signup-link">
            Crie uma aqui
          </span>
        </p>
      </div>

      {/* Área Inferior (Ilustração e Fundo Roxo) */}
      <div className="login-footer-illustration">
        <img src="/img-vitta/dupla_fit.svg" alt="Pessoas correndo" />
      </div>

    </div>
  );
}

export default Login;