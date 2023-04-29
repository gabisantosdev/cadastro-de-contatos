const form = document.getElementById('cadastro-de-contatos');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
  e.preventDefault();

  cadastroDeContatos();
  adicionarContatoNaTabela();
})

function cadastroDeContatos() {
  const inputNomeContato = document.getElementById('nome-de-contato');
  const inputNumeroTelefone = document.getElementById('numero-de-telefone');

  if (telefones.includes(inputNumeroTelefone.value)) {
    alert(`O telefone: ${inputNumeroTelefone.value} já foi adicionado!`);
  } else {
    contatos.push(inputNomeContato.value);
    telefones.push(parseInt(inputNumeroTelefone.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;
  }

  inputNomeContato.value = '';
  inputNumeroTelefone.value = '';
  console.log(contatos);
  console.log(telefones);
}

function adicionarContatoNaTabela() {
  const campoContato = document.querySelector('tbody');
  campoContato.innerHTML = linhas;
}
