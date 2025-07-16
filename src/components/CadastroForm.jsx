import React, { useState } from 'react';

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

  // Função chamada ao alterar qualquer campo do formulário
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // Atualiza o campo correspondente
    setErro(''); // Limpa mensagem de erro ao digitar
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    // Validação: verifica se todos os campos estão preenchidos
    if (!form.nome || !form.email || !form.senha) {
      setErro('Todos os campos são obrigatórios!');
      return;
    }
    // Aqui você pode enviar os dados para uma API ou mostrar um alerta
    alert('Cadastro realizado com sucesso!');
    setForm({ nome: '', email: '', senha: '' }); // Limpa os campos após cadastro
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300, margin: 'auto' }}>
      <h2>Cadastro</h2>
      <div style={{ marginBottom: '16px' }}>
        <label>Nome:</label>
        {/* Campo de texto para o nome do usuário */}
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label>Email:</label>
        {/* Campo de texto para o e-mail do usuário */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>
      <div style={{ marginBottom: '16px' }}>
        <label>Senha:</label>
        {/* Campo de senha para o usuário */}
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '4px' }}
        />
      </div>
      {/* Exibe mensagem de erro se houver */}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroForm;