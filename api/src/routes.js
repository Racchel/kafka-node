import { Router } from 'express'
import { CompressionTypes } from 'kafkajs'

const routes = Router()

routes.post('/beneficiary', async (req, res ) => { 
    const message = req.body

    await req.producer.send({
        topic: 'issue-beneficiary',
        compression: CompressionTypes.GZIP,
        messages: [
            { value: JSON.stringify(message) }
        ],
    })

    return res.json({ ok: true });
});

export default routes;