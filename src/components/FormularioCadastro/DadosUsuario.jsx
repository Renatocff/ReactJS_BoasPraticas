import React, { useState, useContext } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from "../../hooks/useErros";

const DadosUsuario = ({ aoEnviar }) => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");    
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ email, senha });
            }
        }}>
            <TextField
                value={email}
                id="email"
                name="email"
                label="email"
                type="email"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                value={senha}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                required
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(e) => setSenha(e.target.value)}
                onBlur={validarCampos}
                error={erros.senha.valido}
                helperText={erros.senha.texto}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Próximo</Button>
        </form>
    );
}

export default DadosUsuario;