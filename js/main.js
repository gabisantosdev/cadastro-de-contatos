const form = document.getElementById("cadastro-de-contatos");
const contatos = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  cadastroDeContatos();
  adicionarContatoNaTabela();
});

function cadastroDeContatos() {
  const inputNomeContato = document.getElementById("nome-de-contato");
  const inputNumeroTelefone = document.getElementById("numero-de-telefone");

  const isNumberRegistered = telefones.includes(inputNumeroTelefone.value);
  if (isNumberRegistered) {
    alert(`O telefone: ${inputNumeroTelefone.value} já foi adicionado!`);
    return;
  }

  contatos.push(inputNomeContato.value);
  telefones.push(parseInt(inputNumeroTelefone.value));

  let linha = "<tr>";
  linha += `<td>${inputNomeContato.value}</td>`;
  linha += `<td>${inputNumeroTelefone.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNomeContato.value = "";
  inputNumeroTelefone.value = "";
  console.log(contatos);
  console.log(telefones);
}

function adicionarContatoNaTabela() {
  const campoContato = document.querySelector("tbody");
  campoContato.innerHTML = linhas;
}
