// script.js
const filtroInput = document.getElementById('filtro');
const tabelaBody = document.getElementById('tabela').querySelector('tbody');

// Simulando dados (substitua por seus próprios dados)
const dados = [
  { nome: 'João', idade: 30, cidade: 'São Paulo' },
  { nome: 'Maria', idade: 25, cidade: 'Rio de Janeiro' },
  // ... mais dados
];


function filtrar() {
  const textoFiltro = filtroInput.value.toLowerCase();
  const dadosFiltrados = dados.filter(item => {
    return item.nome.toLowerCase().includes(textoFiltro);
  });

  const fileInput = document.getElementById('fileInput');
const tabelaBody = document.getElementById('tabela').querySelector('tbody');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const data = e.target.result;
    // Parse o arquivo CSV ou XLSX (utilizando Papa Parse ou SheetJS)
    // ... código para parsear o arquivo e atualizar os dados ...
  };

  reader.readAsText(file);
});

  // Limpar a tabela e adicionar os dados filtrados
  tabelaBody.innerHTML = '';
  dadosFiltrados.forEach(item => {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.idade}</td>
      <td>${item.cidade}</td>
    `;
    tabelaBody.appendChild(novaLinha);
  });
}


filtroInput.addEventListener('input', filtrar);

// Chamar a função de filtragem inicialmente para preencher a tabela
filtrar();

