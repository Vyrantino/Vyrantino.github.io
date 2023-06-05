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
  ButtonGroup,
  Snackbar,
  Alert, 
} from '@mui/material';
import Sidebar from './sidebar';

function App() {
  React.useEffect( () =>{
    setPokemones( Pokemones ) ;
    setPokemonesPlayer2( Pokemones ) ;
    setPreguntasUtilizadas([]) ;
    
  }, [] )

  const [ pokemones, setPokemones ] = React.useState([]) ;
  const [ pokemonesPlayer2, setPokemonesPlayer2 ] = React.useState([]) ;
  const [pregunta, setPregunta] = React.useState(null);
  const [preguntasUtilizadas, setPreguntasUtilizadas] = React.useState([]);
  const [ preguntaEspecifica , setPreguntaEspecifica ] = React.useState( null );
  const [ tipoPregunta , setTipoPregunta ] = React.useState( false ) ;
  const [ open , setOpen ] = React.useState( false ) ; 
  const [ openGame , setOpenGame ] = React.useState( true ) ; 
  const [ pickedPokemon , setPickedPokemon ] = React.useState([]) ; 
  const [ openSnackbar , setOpenSnackbar ] = React.useState( false ) ;
  const [ winner , setWinner ] = React.useState(false) ;
  const [ openDrawer , setOpenDrawer ] = React.useState( false ) ;

  const obtenerPreguntaEspecifica = () =>{

      const pokemon = pokemones[ Math.floor( Math.random() * pokemones.length ) ].Nombre ;
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
        setPokemonesPlayer2( Pokemones );
        setPreguntasUtilizadas( [] );
        setPregunta([]) ;
        setOpen( false ) ;
        setPickedPokemon( Pokemones[Math.floor( Math.random() * Pokemones.length ) ] ) ; 
      }


  let filtro = {} ;

  function aplicarFiltro(propiedad, valor) {

    //if( pickedPokemon && pickedPokemon[ propiedad ] === valor ){
      filtro[propiedad] = valor;
      const resultadoFiltro = filtrarPokemon(filtro);
      setPokemones( resultadoFiltro ) ;
      console.log( resultadoFiltro ) ;
  //  }
   //else if( pickedPokemon && pickedPokemon[ propiedad ] === false ){
      // filtro[propiedad] = !valor;
      // const resultadoFiltro = filtrarPokemon(filtro);
      // setPokemones( resultadoFiltro ) ;
      // console.log( resultadoFiltro ) ;
  // }
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
    //if( pickedPokemon.Nombre === valor ){
      const Respuesta = pokemones.filter( pokemon => pokemon.Nombre === valor ) ;
      console.log( Respuesta ) ;
      setPokemones(  Respuesta  ) ;
      setPreguntaEspecifica( [] ) ;
    //}
  }
  const descartar = ( valor ) =>{
      const Descarte = pokemones.filter( pokemon => pokemon.Nombre !== valor ) ;
      setPokemones(  Descarte  ) ;
      setPreguntaEspecifica( [] ) ;
  }

  const respuestaJugador =  (  valor ) =>{
    //if( pickedPokemon.Nombre === valor ){
      const Respuesta = pokemones.filter( pokemon => pokemon.Nombre === valor ) ;
      console.log( Respuesta ) ;
      setPokemones(  Respuesta  ) ;
      setPreguntaEspecifica( [] ) ;
    //}
  }
  const descartarJugador = ( valor ) =>{
      const Descarte = pokemones.filter( pokemon => pokemon.Nombre !== valor ) ;
      setPokemones(  Descarte  ) ;
      setPreguntaEspecifica( [] ) ;
  }

  const handleComenzarJuego = () =>{
    setOpenGame( false ) ;
    setPickedPokemon( Pokemones[Math.floor( Math.random() * Pokemones.length ) ] ) ; 
    console.log( pickedPokemon ) ;
  }

  const handleRespuestaJugador = ( nombre ) => {

    if( nombre === pickedPokemon.Nombre ){
       const result = pokemonesPlayer2.filter( ( pokemon ) => pokemon.Nombre ===  nombre );
       setPokemonesPlayer2( result ) ;
    }
    else{
      setOpenSnackbar( true );

    }

  }

  
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
    obtenerPreguntaAleatoria() ;
  };

  
  const handleOption = ( propiedad , tipo ) =>{
    aplicarFiltro( propiedad , tipo ) ;
  }

  const handleOpenDrawer = () =>{
    setOpenDrawer( true ) ;

  }

  
  const toggleDrawer = (  )  => {

    setOpenDrawer( false );
  };

  return (
  
      <Box  >
        <Sidebar 
            openDrawer = { openDrawer }
            closeDrawer = { toggleDrawer }
            pokemonesPlayer2 = { pokemonesPlayer2 }
            setPokemonesPlayer2 = { setPokemonesPlayer2 }
            pickedPokemon = { pickedPokemon }
        />
        


        <Snackbar open = { openSnackbar } autoHideDuration={3000} onClose={ handleCloseSnackbar } anchorOrigin= { { vertical: 'top' , horizontal: 'center' } }  >
            <Alert  severity="warning" sx={{ width: '100%' }}  >
              Intenta con otra propiedad! 
            </Alert>
        </Snackbar> 

        <Dialog  open = { openGame } >
          <DialogTitle>  Iniciar Juego  </DialogTitle>
          <Button onClick={  handleComenzarJuego }  variant = 'contained' > Comenzar Juego  </Button>
        </Dialog>

     

            <Button variant= 'contained' color='secondary' onClick={ handleReiniciar } > Reiniciar</Button>

        

        <Box sx={ { display: 'flex'   } } >
            <Box flex={ 1 } >
              <Button variant='contained' > PC </Button>
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
              <List  className="lista">
                  {
                    
                      pokemones.map( ( pokemon ) =>(
                        
                        <Box  key={pokemon.Nombre} >
                          { pokemones.length === 1 && <Typography> Mi pokemon es </Typography> }
                            <ListItemButton  
                              onClick={ () => {} }
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
                            <ListItemText  sx={{ m: '10px' , color: 'white' }} primary= { pokemon.Nombre } className='PokemonNames' />  
                        </Box>
                      ) )
                      
                  }
                </List>
            </Box>

            <Box flex={ 1 } >
              <Button variant='contained' color='error' onClick={ () => console.log( pickedPokemon )  } > Jugador </Button>
              <Button variant='contained'  color='info' onClick = { handleOpenDrawer } >  Pregunta </Button>
              <List className="lista">
                  {
                    
                      pokemonesPlayer2.map( ( pokemon ) =>(
                        
                        <Box  key={pokemon.Nombre} >
                          { pokemonesPlayer2.length === 1 && <Typography> Su pokemon es </Typography> }
                            <ListItemButton  
                              onClick={ () => handleRespuestaJugador( pokemon.Nombre )   }
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
                            <ListItemText  sx={{ m: '10px' , color: 'white' }} primary= { pokemon.Nombre } className='PokemonNames' />  
                        </Box>
                      ) )
                      
                  }
                </List>
            </Box>
           

        </Box>
          

            <Dialog  open = { open } >
              <DialogTitle> Ha ingresado algun dato incorrecto, <br /> reinicie porfi uwu </DialogTitle>
              <Button onClick={ handleReiniciar }  variant = 'contained' > Reiniciar  </Button>
            </Dialog>
            
          {
              pokemones.length === 1 &&
              <Dialog open={ true } >
                  <DialogTitle> Felicidades! </DialogTitle>
                  <Button variant='contained' color='error'  > La PC ha adivinado <br />  su pokemon primero! </Button>
                  <Button onClick={ handleReiniciar }  variant = 'contained' > Reiniciar  </Button>
              </Dialog>
          }
          
          {
              pokemonesPlayer2.length === 1 &&
              <Dialog open={ true } >
                  <DialogTitle> Felicidades! </DialogTitle>
                  <Button variant='contained' color='warning'  > Ha Adivinado el pokemon de la PC! </Button>
                  <Button onClick={ handleReiniciar }  variant = 'contained' > Reiniciar  </Button>
              </Dialog>
          }
          
      </Box>
  )
}

export default App
