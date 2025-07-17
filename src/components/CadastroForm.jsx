import React, { useState } from 'react';
import './CadastroForm.css'; // Importa o CSS para estilização

// Componente principal do formulário de cadastro
function CadastroForm() {
  // Estado para armazenar os valores dos campos do formulário
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  // Estado para armazenar mensagens de erro
  const [erro, setErro] = useState('');
  const [validacao, setValidacao] = useState({});

  // Função chamada ao alterar qualquer campo do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Atualiza o campo correspondente
    setErro(''); // Limpa mensagem de erro ao digitar
  };

  const validarEmail = (email) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email) ? '' : 'Email inválido';
  };

  const validarSenha = (senha) => {
    if (senha.length < 6) {
      return 'A senha deve ter pelo menos 6 caracteres';
    }
    // Adicione outras validações conforme necessário, como:
    // - Pelo menos um número
    // - Pelo menos um caractere especial
    // - etc.
    return '';
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    let erros = {};
    erros.email = validarEmail(form.email);
    erros.senha = validarSenha(form.senha);
    setValidacao(erros);

    if (form.nome.trim() === '') {
      setErro('O nome é obrigatório.');
      return; // Impede o envio se o nome estiver vazio
    } else if (erros.email || erros.senha) {
      setErro('Por favor, corrija os erros de validação.');
      return; // Impede o envio se houver erros de validação
    }
    // Aqui você pode enviar os dados para uma API ou mostrar um alerta
    alert('Cadastro realizado com sucesso!');
    setForm({ nome: '', email: '', senha: '' }); // Limpa os campos após cadastro
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cadastro</h2>
      <div className="form-group">
        <label>Nome:</label>
        {/* Campo de texto para o nome do usuário */}
        <input
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          value={form.nome}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        {/* Campo de texto para o e-mail do usuário */}
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          value={form.email}
          onChange={handleChange}
        />
        {validacao.email && <p className="error-message">{validacao.email}</p>}
      </div>
      <div className="form-group">
        <label>Senha:</label>
        {/* Campo de senha para o usuário */}
        <input
          type="password"
          name="senha"
          placeholder="Crie uma senha"
          value={form.senha}
          onChange={handleChange}
        />
        {validacao.senha && <p className="error-message">{validacao.senha}</p>}
      </div>
      {/* Exibe mensagem de erro se houver */}
      {erro && <p className="error-message">{erro}</p>}
      <button className="cadastrar-button" type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroForm;