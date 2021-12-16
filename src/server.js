import express, { request, response } from "express";
import { Kafka } from "kafkajs";

import routes from "./routes";

const app = express();

/**
 * Faz conexão com o Kafka
 */
const kafka = new Kafka ({
    clientId: "api",
    brokers: ["localhost:9092"]
});

const producer = kafka.producer();

/**
 * Disponibiliza o producer para todas as rotas
 */
app.use((request, response, next) => {
    request.producer = producer;

    return next();
})

/**
 * Cadastra as rotas da aplicação
 */
app.use(routes);

async function run() {
    await producer.connect();

    app.listen(3333);
}

run().catch(console.error());  
