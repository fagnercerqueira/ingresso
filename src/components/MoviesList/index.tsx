import React from 'react';
import { MovieListContainer } from './styled';
import { MovieItem } from './MovieItem';

interface MovieProps {
    title: string,
    term: string
}

interface MovieState {
    total: number
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



export class Filter extends React.Component<MovieProps, MovieState>{
    public render() {
        return (
            <MovieListContainer>
                <div className="title-wrapper">
                    <h3>{this.props.title}</h3>
                    {this.props.term ? <span>{this.props.term}</span> : ''}
                </div>
                
                <ul>
                    {elements.map((data, index) => {
                        return <MovieItem data={data} key={index}></MovieItem>
                    })}
                </ul>
            </MovieListContainer>
        )
    }
}

export default Filter;