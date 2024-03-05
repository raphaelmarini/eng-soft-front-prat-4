class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome} e sou um ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, departamento) {
        super(nome, idade, 'Gerente');
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, linguagem) {
        super(nome, idade, 'Desenvolvedor');
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function exibirErro(mensagem) {
    document.getElementById('resultado').innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const cargo = document.getElementById('cargo').value;

    if (!nome || !idade || !cargo) {
        exibirErro('Por favor, preencha todos os campos.');
        return;
    }

    let funcionario;
    if (cargo === 'Gerente') {
        const departamento = document.getElementById('departamento').value;
        funcionario = new Gerente(nome, idade, departamento);
    } else {
        const linguagem = document.getElementById('linguagem').value;
        if (!linguagem) {
        exibirErro('Por favor, preencha todos os campos.');
        return;
    }
        funcionario = new Desenvolvedor(nome, idade, linguagem);
    }

    exibirInformacoes(funcionario);
});

document.getElementById('cargo').addEventListener('change', function() {
    const cargo = document.getElementById('cargo').value;
    if (cargo === 'Gerente') {
        document.getElementById('departamentoDiv').style.display = 'block';
        document.getElementById('linguagemDiv').style.display = 'none';
    } else {
        document.getElementById('departamentoDiv').style.display = 'none';
        document.getElementById('linguagemDiv').style.display = 'block';
    }
});

function exibirInformacoes(funcionario) {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>${funcionario.seApresentar()}</p>`;

    if (funcionario instanceof Gerente) {
        resultadoDiv.innerHTML += `<p>${funcionario.gerenciar()}</p>`;
    } else if (funcionario instanceof Desenvolvedor) {
        resultadoDiv.innerHTML += `<p>${funcionario.programar()}</p>`;
    }
}
 
