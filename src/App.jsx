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
  Pico, 
  Descartar
} from './preguntas';
import { 
  Box, 
  Button, 
  Typography , 
  List,
  Container, 
} from '@mui/material';
import pokeball from './assets/pokeball.png'

function App() {
  React.useEffect( () =>{
    setPokemones( Pokemones ) ;
    setPreguntasUtilizadas([]) ;
  }, [] )
  
  const [ pokemones, setPokemones ] = useState([]) ;
  const [pregunta, setPregunta] = React.useState(null);
  const [preguntasUtilizadas, setPreguntasUtilizadas] = React.useState([]);
  const [ preguntaEspecifica , setPreguntaEspecifica ] = React.useState( null );
  const [ tipoPregunta , setTipoPregunta ] = React.useState( false ) ;

  const handleOption = ( propiedad , tipo ) =>{
    aplicarFiltro( propiedad , tipo ) ;
  }

  const obtenerPreguntaEspecifica = () =>{

      const pokemon = pokemones[0].Nombre ;
      setTipoPregunta( true ) ;
      setPreguntaEspecifica(            
          <Descartar 
              pokemon = { pokemon }
              respuesta = { respuesta }
              descartar = { descartar }
          /> 
      ) ;
      
  }


  const obtenerPreguntaAleatoria = () => {
      console.log( pokemones.length ) ;
      setTipoPregunta( false );
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
        setPregunta([]) ;
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

  const respuesta =  (  valor ) =>{
    const Respuesta = pokemones.filter( pokemon => pokemon.Nombre === valor ) ;
    console.log( Respuesta ) ;
    setPokemones(  Respuesta  ) ;
    setPreguntaEspecifica( [] ) ;
  }
  const descartar = ( valor ) =>{
    const Descarte = pokemones.filter( pokemon => pokemon.Nombre !== valor ) ;
    setPokemones(  Descarte  ) ;
    setPreguntaEspecifica( [] ) ;
  }

  return (
  
      <Box  >
          
          <Button onClick={
              pokemones.length >= 8 ?
              obtenerPreguntaAleatoria
              :
              obtenerPreguntaEspecifica 
            }
          >
            pregunta
          </Button>
            { 
              tipoPregunta ? 
              preguntaEspecifica
              :
              pregunta
            }
          <List>
             {
               
                pokemones.map( ( pokemon ) =>(
                  
                  <Box  key={pokemon.Nombre} >
                    { pokemones.length === 1 && <Typography> Su pokemon es </Typography> }
                      <Container>
                          <img src= { pokeball }  width={24} height={24} />
                          <Typography> { pokemon.Nombre } </Typography>
                      </Container>
                  </Box>
                ) )
                
             }
          </List>
          <Button onClick={ handleReiniciar } > Reiniciar </Button>
      </Box>
  )
}

export default App
