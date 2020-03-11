import React from 'react';
import { MovieListContainer } from './styled';
import { Link } from 'react-router-dom';

interface FilterState {
    activeFilters: []
}
const elements: any[] = [
     {
        id: 22971,
        title: 'Dois Irmãos - Uma Jornada Fantástica',
        city: 'Rio de Janeiro',
        siteURL: 'https://www.ingresso.com/sao-paulo/home/filmes/dois-irmaos-uma-jornada-fantastica',
        images: [
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
            "type": "PosterPortrait"
            },
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
            "type": "PosterHorizontal"
            }
        ],
        genres: [
            "Animação",
            "Fantasia"
            ],
        trailers: [
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            },
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            }
         ]
    },

    {
        id: 22971,
        title: 'Dois Irmãos - Uma Jornada Fantástica',
        city: 'Rio de Janeiro',
        siteURL: 'https://www.ingresso.com/sao-paulo/home/filmes/dois-irmaos-uma-jornada-fantastica',
        images: [
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
            "type": "PosterPortrait"
            },
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
            "type": "PosterHorizontal"
            }
        ],
        genres: [
            "Animação",
            "Fantasia"
            ],
        trailers: [
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            },
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            }
         ]
    },

    {
        id: 22971,
        title: 'Dois Irmãos - Uma Jornada Fantástica',
        city: 'Rio de Janeiro',
        siteURL: 'https://www.ingresso.com/sao-paulo/home/filmes/dois-irmaos-uma-jornada-fantastica',
        images: [
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
            "type": "PosterPortrait"
            },
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
            "type": "PosterHorizontal"
            }
        ],
        genres: [
            "Animação",
            "Fantasia"
            ],
        trailers: [
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            },
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            }
         ]
    },

    {
        id: 22971,
        title: 'Dois Irmãos - Uma Jornada Fantástica',
        city: 'Rio de Janeiro',
        siteURL: 'https://www.ingresso.com/sao-paulo/home/filmes/dois-irmaos-uma-jornada-fantastica',
        images: [
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
            "type": "PosterPortrait"
            },
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
            "type": "PosterHorizontal"
            }
        ],
        genres: [
            "Animação",
            "Fantasia"
            ],
        trailers: [
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            },
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            }
         ]
    },

    {
        id: 22971,
        title: 'Dois Irmãos - Uma Jornada Fantástica',
        city: 'Rio de Janeiro',
        siteURL: 'https://www.ingresso.com/sao-paulo/home/filmes/dois-irmaos-uma-jornada-fantastica',
        images: [
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
            "type": "PosterPortrait"
            },
            {
            "url": "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
            "type": "PosterHorizontal"
            }
        ],
        genres: [
            "Animação",
            "Fantasia"
            ],
        trailers: [
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            },
            {
            "type": "Youtube",
            "url": "https://www.youtube.com/watch?v=bPiNYBHvB9Y",
            "embeddedUrl": "//www.youtube.com/embed/bPiNYBHvB9Y"
            }
         ]
    },

];



export class Filter extends React.Component<{}, FilterState>{
    public render() {
        return (
            <MovieListContainer>
                <div className="title-wrapper">
                    <h3>Featured Movies</h3>
                </div>
                
                <ul>
                    {elements.map((data, index) => {
                        return <li key={index}>
                                <Link to="/">
                                        <figure>
                                            <img src={data.images[0].url}  alt={data.title}/>
                                        </figure>
                                        <h2>{data.title}</h2>
                                
                                </Link>
                            </li>
                    })}
                </ul>
            </MovieListContainer>
        )
    }
}

export default Filter;