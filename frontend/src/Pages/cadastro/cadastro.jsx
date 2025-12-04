import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';

function Cadastro() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Mantido apenas para transição visual

  // Apenas avança a tela visualmente
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Finaliza e navega
  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/Perfil');
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        {step > 1 && (
          <button type="button" className="btn-back" onClick={prevStep}>←</button>
        )}
        <h2>Criar Conta</h2>
      </header>

      <form className="form">

        {/* PASSO 1 */}
        {step === 1 && (
          <div className="fade">
            
            <div className="input-group">
              <label>Nome Completo</label>
              <input
                name="nome"
                type="text"
                placeholder="Digite seu nome"
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                placeholder="Digite seu email"
              />
            </div>

            <button type="button" className="btn-next" onClick={nextStep}>
              Próximo →
            </button>

            <div className="steps">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {/* PASSO 2 */}
        {step === 2 && (
          <div className="fade">

            <div className="input-group">
              <label>Data Nascimento</label>
              <input
                name="data_nascimento"
                type="date"
              />
            </div>

            <div className="input-group">
              <label>Gênero</label>
              <select name="genero" defaultValue="">
                <option value="" disabled>Selecione</option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
            </div>

            <button type="button" className="btn-next" onClick={nextStep}>
              Próximo →
            </button>

            <div className="steps">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
          </div>
        )}

        {/* PASSO 3 */}
        {step === 3 && (
          <div className="fade">

            {/* SENHA */}
            <div className="input-group password-group">
              <label>Senha</label>
              <input
                type="password"
                name="senha"
                placeholder="Crie uma senha"
              />
            </div>

            {/* CONFIRMAR SENHA */}
            <div className="input-group password-group">
              <label>Confirmar Senha</label>
              <input
                type="password"
                name="confirmar_senha"
                placeholder="Confirme a senha"
              />
            </div>

            <button
              type="submit"
              className="btn-next"
              onClick={handleCadastro}
            >
              Cadastrar
            </button>

            <div className="steps">
              <span></span>
              <span></span>
              <span className="active"></span>
            </div>
          </div>
        )}

      </form>

      <div className="footer-img">
        <img src="/img-vitta/biking.svg" alt="Ciclista" />
      </div>

    </div>
  );
}

export default Cadastro;