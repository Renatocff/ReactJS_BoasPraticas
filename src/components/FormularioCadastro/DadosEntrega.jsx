import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const DadosEntrega = ({ aoEnviar }) => {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField value={cep} id="cep" label="cep" type="number" variant="outlined" margin="normal" fullWidth onChange={(e) => setCep(e.target.value)} />
            <TextField value={endereco} id="endereco" label="endereco" type="text" variant="outlined" margin="normal" fullWidth onChange={(e) => setEndereco(e.target.value)} />
            <TextField value={numero} id="numero" label="numero" type="text" variant="outlined" margin="normal" onChange={(e) => setNumero(e.target.value)} />
            <TextField value={estado} id="estado" label="estado" type="text" variant="outlined" margin="normal" onChange={(e) => setEstado(e.target.value)} />
            <TextField value={cidade} id="cidade" label="cidade" type="text" variant="outlined" margin="normal" fullWidth onChange={(e) => setCidade(e.target.value)} />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;