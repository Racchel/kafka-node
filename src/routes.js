import express from "express";

const routes = express.Router();

routes.post("/certifications", async (request, response) => {
    await producer.send({
        topic: "issue-certificate",
        messages: [
            {
                nome: "String",
                email: "String",
                sexo: "String",
                tipoBeneficiario: "F",
                cpf: "00000000000",
                endereco: "String",
                bairro: "String",
                cidade: "String",
                uf: "String",
                pais: "String",
                ddd: "11",
                telefone: "999999999",
                ramal: "String",
                codigoBanco: "String",
                agencia: "String",
                digitoAgencia: "String",
                contaCorrente: "String",
                digitoContaCorrente: "String",
                tipoConta: "String",
                codigoMatricula: "String",
                codigoINSS: "String",                     // - opcional
                tipoINSS: "String",                       // - opcional
                dataNascimento: "1999-12-31",
                paisNascimento: "String",                 // - opcional
                estadoNascimento: "String",               // - opcional
                cidadeNascimento: "String",               // - opcional
                dataAposentadoria: "String",
                cnpj: "String",                           // - AVP apenas
                nomeInstituidora: "String",               // - AVP apenas
                codigoConvenio: "String",                 // - AVP apenas
                codigoFilial: "String",                   // - AVP apenas
                regimeTributario: "String",
                numeroProposta: "String",
                codigoEstruturaVendas: "String",
                valorReserva: 0000000,
                codproduto: "0001"
            },
        ],
    })

    return response.json({ ok: true });
});

export default routes;