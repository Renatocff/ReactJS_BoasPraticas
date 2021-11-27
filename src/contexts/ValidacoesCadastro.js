import { createContext } from 'react';

const ValidacoesCadastro = createContext({
    cpf: semValidacao,
    senha: semValidacao
});

function semValidacao(dados) {
    console.log(dados);
    return { valido: true, texto: "" }
}

export default ValidacoesCadastro;