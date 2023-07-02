function register(e) {
  e.preventDefault();

  var nome = document.getElementById("nome_completo").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var data_nacimento = document.getElementById("data_nascimento").value;
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("senha").value;

  if (nome == "") {
    return alert("Preencha o campo nome");
  } else if (telefone == "") {
    return alert("Preencha o campo telefone");
  } else if (email == "") {
    return alert("Preencha o campo email");
  } else if (data_nacimento == "") {
    return alert("Preencha o campo data de nascimento");
  } else if (usuario == "") {
    return alert("Preencha o campo usuário");
  } else if (password == "") {
    return alert("Preencha o campo senha");
  }

  var form = document.getElementById("register");

  form.classList.add("disabled");

  var dados = document.getElementById("dados");

  dados.classList.remove("disabled");

  var nome = (document.getElementById("nome_valor").innerText = nome);
  var telefone = (document.getElementById("telefone_valor").innerText =
    telefone);
  var email = (document.getElementById("email_valor").innerText = email);
  var data_nacimento = (document.getElementById("data_valor").innerText =
    data_nacimento);
  var usuario = (document.getElementById("usuario_valor").innerText = usuario);
  var password = (document.getElementById("senha_valor").innerText = password);
}

function finalizarCompra() {
  window.location.href = "/";
}
