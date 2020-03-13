import React from 'react';
import Header from '../../components/Header';
import MovieItem from '../../components/Movie';


const Data: object= {
  id: 22971,
  title: 'Dois Irmãos - Uma Jornada Fantástica',
  synopsis: "Baseado na mundialmente conhecida franquia de games da SEGA, #SonicOFilme conta a história do ouriço mais rápido do mundo enquanto ele se adapta ao seu novo lar na Terra. Nessa comédia de aventura live-action, Sonic e seu novo melhor amigo Tom (James Marsden) precisam se unir para defender o planeta do gênio maligno Dr. Robotnik (Jim Carrey) e seus planos de dominação total. O filme perfeito para a família também conta com Tika Sumpter e Manolo Rey na voz de Sonic!",
  cast: "James Marsden, Jim Carrey, Tika Sumpter",
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
};


class Movie extends React.Component<{}, {}> {
    //Add Body class
    public componentDidMount() {
      document.body.classList.add('movie-item');
    }
  
    public componentWillUnmount() {
      document.body.classList.remove('movie-item');
    }


    public render(){
      return (
        <div className="App">
          <Header />
          <MovieItem data={Data}/>
        </div> 
      );
    }
}

export default Movie;