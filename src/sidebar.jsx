import { Box, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useThemeProps } from "@mui/material";
import * as React from 'react' ; 
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Ash, Brazos, Canino, Cola, Colmillos, Color, Dinosaurio, Felino, Mamifero, Patas, Pico, Reptil, Roedor, Tipo1, Tipo2, Vuela } from "./preguntas";
import Pokemones from "./pokemones";


export default function Sidebar( props ){


const [ pokemones, setPokemones ] = React.useState([]) ;
const [ pokemonesPlayer2, setPokemonesPlayer2 ] = React.useState([]) ;
const [pregunta, setPregunta] = React.useState(null);
const [preguntasUtilizadas, setPreguntasUtilizadas] = React.useState([]);
const [ preguntaEspecifica , setPreguntaEspecifica ] = React.useState( null );
const [ tipoPregunta , setTipoPregunta ] = React.useState( false ) ;
const [ open , setOpen ] = React.useState( false ) ; 
const [ openGame , setOpenGame ] = React.useState( true ) ; 

const [ openSnackbar , setOpenSnackbar ] = React.useState( false ) ;
const [ winner , setWinner ] = React.useState(false) ;
const [ openDrawer , setOpenDrawer ] = React.useState( false ) ;
    


React.useEffect( () =>{
    setPokemones( Pokemones ) ;
    setPokemonesPlayer2( Pokemones ) ;
}, [] ) ; 

React.useEffect( () =>{
    setPregunta( null ) ;
}, [ props.openDrawer ] ) ; 



 let filtro = {} ;

  const handleOption = ( propiedad , tipo ) =>{
    handleCloseDrawer() ; 
    aplicarFiltro( propiedad , tipo ) ;
  }

  function filtrarPokemon(filtro) {
    const listaFiltrada =  props.pokemonesPlayer2.filter(pokemon => {
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
    
    props.setPokemonesPlayer2( listaFiltrada );
    return listaFiltrada ;
  }

  function aplicarFiltro(propiedad, valor) {
    if( props.pickedPokemon && props.pickedPokemon[ propiedad ] === valor ){
      filtro[propiedad] = valor;
      const resultadoFiltro = filtrarPokemon(filtro);
      props.setPokemonesPlayer2( resultadoFiltro ) ;
      console.log( resultadoFiltro ) ;
    }
   else if( props.pickedPokemon && props.pickedPokemon[ propiedad ] === false ){
      filtro[propiedad] = !valor;
      const resultadoFiltro = filtrarPokemon(filtro);
      props.setPokemonesPlayer2( resultadoFiltro ) ;
      console.log( resultadoFiltro ) ;
   }
  }

  const obtenerPregunta = ( indice ) => {

    //setTipoPregunta( false );
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

     
      setPregunta (preguntas[ indice ]);
      
    };

    const handleCloseDrawer = () => {
        props.closeDrawer() ; 

    }


    return(
        <Box>
           <Drawer open={ props.openDrawer } anchor="right"  >
               
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        // onClick={ () => handleCloseDrawer }
                        // onKeyDown={ () => handleCloseDrawer }
                    >
                        
                        <List>

                            <ListItem key='Tipo principal' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 0 ) ; 
                                       
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Tipo principal' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Tipo Secundario' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 1 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Tipo Secundario' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Cola' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 2 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Cola' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Ash' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 3 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Ash' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Patas' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 4 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Patas' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Color' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 5 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Color' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Brazos' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 6 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Brazos' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Colmillos' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 7 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Colmillos' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Vuela' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 8 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Vuela' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Dinosaurio' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 9 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Dinosaurio' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Reptil' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 10 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Reptil' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Roedor' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 11 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Roedor' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Mamifero' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 12 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Mamifero' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Canino' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 13 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Canino' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Felino' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 14 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Felino' />
                                </ListItemButton>
                            </ListItem>

                            <ListItem key='Pico' disablePadding>
                                <ListItemButton
                                    onClick={ () => {
                                        obtenerPregunta( 15 ) ; 
                                        
                                    }}
                                >
                                    <ListItemIcon>
                                        <AcUnitIcon />  
                                    </ListItemIcon>
                                    <ListItemText primary='Pico' />
                                </ListItemButton>
                            </ListItem>
                        </List>

                    </Box>
                {
                    pregunta
                }
           </Drawer>
        </Box>
    );

}