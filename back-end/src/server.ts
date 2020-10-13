import express from 'express';

import { getRepository } from 'typeorm';

import Orphanage from './models/orphanage'


import './database/connection';

const app = express();

app.use(express.json());

app.post('/orphanages', async (request,response) =>{
    const {
        name,
        latitude,
        longitude,
        about,
        opening_hours,
        open_on_weekends
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        opening_hours,
        open_on_weekends,
    });

    await orphanagesRepository.save(orphanage)

    return response.json({ massage: 'Hello World'});
    
});

app.listen(3333);