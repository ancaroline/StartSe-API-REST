import express, { request, response } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;
let LP = [
    {
        id: 1,
        nome: 'LP US - WAR',
        price: 250.50,
        category: 'LP',
        image: 'https://a-static.mlcdn.com.br/800x560/vinil-u2-war-remastered-importado/umusicstore/1849/8df9b1cb05ba4b0091a422f6008908ee.jpg',
        oferta: true
    },
    {
        id: 2,
        nome: 'LP Rita Lee e Roberto - Álbum Saúde',
        price: 62.90,
        category: 'LP',
        image: 'https://artefinalvinil.com.br/wp-content/uploads/2020/08/H-0006.jpg',
        oferta: true
    },
    {
        id: 3,
        nome: 'LP Celso Blues Boy - Marginal Blues',
        price: 62.90,
        category: 'LP',
        image: 'https://d2r9epyceweg5n.cloudfront.net/stores/877/112/products/img_20180928_13524101921-25bd44832a52327eff15421197177955-1024-1024.jpg',
        oferta: false
    },
    {
        id: 4,
        nome: 'LP Nirvana - Greatest Hits Live',
        price: 150.30,
        category: 'LP',
        image: 'https://www.fiftiesstore.com/media/opti_image/webp/catalog/product/cache/8b6431de9410c89d24dfb37cd261db29/n/i/nirvana---greatest-hits-_-live-_-lp.webp',
        oferta: true
    },
    {
        id: 5,
        nome: 'LP Fábio Júnior',
        price: 81.50,
        category: 'LP',
        image: 'https://http2.mlstatic.com/D_NQ_NP_994847-MLB41128775713_032020-O.webp',
        oferta: true
    },   
];

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>work</h1>')
});

app.get('/LP', (request, response) => {
    return response.send(LP);
});

app.post('/LP', (request, response) => {
    const newLp = request.body;

    LP.push(newLp);

    return response.status(StatusCodes.CREATED).send(newLp);
});

app.put('/LP/:userId', (request, response) => {
    const userId = request.params.userId;
    const updateLP = request.body;

    LP = LP.map(user => {
        if (Number(userId) === user.id) {
            return updateLP;
        } 
        return user;
    });

    return response.send(updateLP);
});
