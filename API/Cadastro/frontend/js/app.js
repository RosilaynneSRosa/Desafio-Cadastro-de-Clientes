var Home = document.getElementById("homeInterface");
var Cadastro = document.getElementById("cadastrarInterface");

var btnCadastrar = document.getElementById("cadastrar");
var btnCancelar = document.getElementById("cancelar");
var btnLimpar = document.getElementById("limpar");
var btnEnviar = document.getElementById("enviar");
var btnCarregarCurriculo = document.getElementById("carregarCurriculo");

var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var endereco = document.getElementById("endereco");
var profissao = document.getElementById("profissao");

var mostrar = "initial";
var ocultar = "none";

btnCadastrar.addEventListener("click", function() {
    alternarFormulario();
},);

btnCancelar.addEventListener("click",function (){
   alternarFormulario();
   document.getElementById('formulario').reset()
   nome.style.borderColor = "";
   email.style.borderColor = "";
   telefone.style.borderColor = "";
   endereco.style.borderColor = "";
   profissao.style.borderColor = "";
   btnCarregarCurriculo.style.backgroundColor = "";
});

btnEnviar.addEventListener("click",function (){
   
    var valorNome = nome.value;
    var valorEmail = email.value;
    var valorTelefone = telefone.value;
    var valorEndereco = endereco.value;
    var valorProfissao = profissao.value;
    var valorCurriculo = btnCarregarCurriculo.files[0];
    
    var i = 0;
    if(valorNome == null || valorNome == ""){ nome.style.borderColor = "#E43030"; i++;}
    else { nome.style.borderColor = ""; }
    if(valorEmail == null || valorEmail == ""){ email.style.borderColor = "#E43030"; i++;}
    else { email.style.borderColor = ""; }
    if(valorTelefone == null || valorTelefone == ""){ telefone.style.borderColor = "#E43030"; i++;}
    else { telefone.style.borderColor = ""; }
    if(valorEndereco == null || valorEndereco == ""){ endereco.style.borderColor = "#E43030"; i++;}
    else { endereco.style.borderColor = ""; }
    if(valorProfissao == null || valorProfissao == ""){ profissao.style.borderColor = "#E43030"; i++;}
    else { profissao.style.borderColor = ""; }
    if(btnCarregarCurriculo.files[0] == null || btnCarregarCurriculo.files[0] == undefined){ btnCarregarCurriculo.style.backgroundColor = "#E43030"; i++;}
    else { btnCarregarCurriculo.style.backgroundColor = ""; }

    if(i == 0){



        var codigoRetorno = 200; 
   
        if(codigoRetorno == 200){
            alert("O Envio solicitado foi processado e retornado com sucesso");
        }
        else if(codigoRetorno == 201){
            alert("O Envio foi criado com sucesso.");
        }
        else {
            alert(
                "Erro: "+ codigoRetorno 
                +"\n"+
                "Não foi posstivel concluir o Envio."
            );
        }
    }

});

function alternarFormulario() {
    var formulario = Cadastro.style.display == mostrar;
    if(formulario == false){
        Home.style.display = ocultar;
        Cadastro.style.display = mostrar;
    } else {
        Home.style.display = mostrar;
        Cadastro.style.display = ocultar;
    }
}

window.onload = function () {
  
    if (window.File && window.FileReader && window.FileList && window.Blob) {
     
        btnCarregarCurriculo.addEventListener('change', function (e) {
        
            if (!btnCarregarCurriculo.files[0].type.match(/application.pdf/)) {
                alert("Por favor, selecione apenas no formato PDF.");
                btnCarregarCurriculo.value = null;
            }
        }, false);
    }
    else {
        alert("Arquivo não suportado.");
    }
}