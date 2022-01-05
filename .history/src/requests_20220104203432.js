//Aqui está todas as requisições necessárias

const API_KEY = '88efa6de7fddfc5c17b05ce31b948c59';
const API_BASE = 'https://api.themoviedb.org/3';

//Busca o resultado da requisição
const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais Netflix',
                items: []
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: []
            },
            {
                slug: 'topRated',
                title: 'Em Alta',
                items: []
            }, 
            {
                slug: 'action',
                title: 'Ação',
                items: []
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: []
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: []
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: []
            },
            {
                slug: 'documentaries',
                title: 'Documentários',
                items: []
            }
        ]
    }
}