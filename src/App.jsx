import * as React from 'react' ;
import { useState } from 'react'
import './App.css'
import Pokemones from './pokemones'
import{ 
  Tipo1, 
  Tipo2,
  Cola,
  Ash,
  Patas,
  Color, 
  Brazos,
  Colmillos,
  Vuela,
  Dinosaurio, 
  Reptil , 
  Roedor,
  Mamifero,
  Canino,
  Felino,
  Pico 
} from './preguntas';
import { 
  Box, 
  Button, 
  Typography , 
  List, 
} from '@mui/material';

function App() {
  React.useEffect( () =>{
    setPokemones( Pokemones ) ;
    setPreguntasUtilizadas([]) ;
  }, [] )
  
  const [ pokemones, setPokemones ] = useState([]) ;
  const [pregunta, setPregunta] = React.useState(null);
  const [preguntasUtilizadas, setPreguntasUtilizadas] = React.useState([]);

  const handleOption = ( propiedad , tipo ) =>{
    aplicarFiltro( propiedad , tipo ) ;
  }



  const obtenerPreguntaAleatoria = () => {
      const preguntas = [
          <Tipo1 handleOption={handleOption}  />,
          <Tipo2 handleOption={handleOption}  />,
          <Cola handleOption={handleOption}   />,
          <Ash handleOption={handleOption}   />,
          <Patas handleOption={handleOption}   />,
          <Color handleOption={handleOption}   />,
          <Brazos handleOption={handleOption}   />,
          <Colmillos handleOption={handleOption}   />,
          <Vuela handleOption={handleOption}   />,
          <Dinosaurio handleOption={handleOption}   />,
          <Reptil handleOption={handleOption}   />,
          <Roedor handleOption={handleOption}   />,
          <Mamifero handleOption={handleOption}   />,
          <Canino handleOption={handleOption}   />,
          <Felino handleOption={handleOption}   />,
          <Pico handleOption={handleOption}   />,
        ];

        const preguntasDisponibles = preguntas.filter((_, index) => !preguntasUtilizadas.includes(index));
        if (preguntasDisponibles.length === 0) {
          
          setPreguntasUtilizadas([]);
          return;
        }

        const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);

        const preguntaAleatoria = preguntasDisponibles[indiceAleatorio];
      
        console.log( preguntasDisponibles ) ;
        setPreguntasUtilizadas([...preguntasUtilizadas, indiceAleatorio]);
        setPregunta(preguntaAleatoria);
      
      };

      const handleReiniciar = () =>{
        setPokemones( Pokemones );
        setPreguntasUtilizadas( [] );
      }


  let filtro = {} ;

  function aplicarFiltro(propiedad, valor) {
    filtro[propiedad] = valor;
    const resultadoFiltro = filtrarPokemon(filtro);
    setPokemones( resultadoFiltro ) ;
    console.log( resultadoFiltro ) ;

  }

  function reiniciarFiltro() {
    filtro = {};
  }
  
  function filtrarPokemon(filtro) {
    const listaFiltrada =  pokemones.filter(pokemon => {
      for (const propiedad in filtro) {
        if (pokemon[propiedad] !== filtro[propiedad]) {
          return false;
        }
      }
      return true;
    });
    
    setPokemones( listaFiltrada );
    return listaFiltrada ;
  }



  return (
  
      <Box  >
          
          <Button onClick={
              obtenerPreguntaAleatoria 
            }
          >
            pregunta
          </Button>
            { pregunta }
          <List>
             {
               
                pokemones.map( ( pokemon ) =>(
                  
                  <Box key={pokemon.Nombre} >
                    { pokemones.length === 1 && <Typography> Su pokemon es </Typography> }
                        <img src='/src/assets/pokeball.svg' width={24} height={24} />
                        <Typography> { pokemon.Nombre } </Typography>
                  </Box>
                ) )
                
             }
          </List>
          <Button onClick={ handleReiniciar } > Reiniciar </Button>
      </Box>
  )
}

export default App
