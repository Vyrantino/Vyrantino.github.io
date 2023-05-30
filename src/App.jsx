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
  ListItemButton,
  ListItemIcon,
  ListItemText,
  DialogTitle,
  Dialog, 
} from '@mui/material';

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
  const [ open , setOpen ] = React.useState( false ) ; 
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
        setOpen( false ) ;
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

    
    if (listaFiltrada.length === 0) {
      setOpen(true);
    }
    
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
          
          <Button 
              disabled = { pokemones.length === 1 }
              variant='contained'
              onClick={
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
          <List className="lista">
             {
               
                pokemones.map( ( pokemon ) =>(
                  
                  <Box key={pokemon.Nombre} >
                    { pokemones.length === 1 && <Typography> Su pokemon es </Typography> }
                      <ListItemButton  
                        
                        sx = {{width: "100px", height: "100px" , m: 1  }}
                      >
                          <ListItemIcon   
                            sx = {{  
                              backgroundPosition: pokemon.posicion , 
                              "&:hover": {
                                backgroundPosition: pokemon.hover ,
                                
                              },
                            }} 
                            className = "ListaPokemon" 
                            onClick={ () => {} }
                          > 
                          
                            
                          </ListItemIcon>
                          
                      </ListItemButton>
                      <ListItemText sx={{ m: '10px' }} primary= { pokemon.Nombre } className='PokemonNames' />  
                  </Box>
                ) )
                
             }
          </List>
          <Button variant= 'contained' onClick={ handleReiniciar } > Reiniciar</Button>

            <Dialog  open = { open } >
              <DialogTitle> Ha ingresado algun dato incorrecto, <br /> reinicie porfi uwu </DialogTitle>
              <Button onClick={ handleReiniciar }  variant = 'contained' > Reiniciar  </Button>
            </Dialog>

          
      </Box>
  )
}

export default App
