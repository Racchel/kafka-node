# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Fluxo da aplicação

- API principal (Station);
- Geração de certificados;

## Fluxo
- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (síncrona/assíncrona);

Se conseguir síncrona/assíncrona:

- Receber uma resposta assíncrona de quando o email com o certificado foi enviado;

## O que sabemos?

- REST (latência = tempo de resposta);
- Redis/ RabbitMQ / **Kafka**;
- Nubenk, Uber, Paypal, Netflix;