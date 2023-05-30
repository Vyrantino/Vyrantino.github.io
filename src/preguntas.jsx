import * as React from 'react' ; 

import { 
    Box , 
    Dialog, 
    List, 
    ListItemButton, 
    ListItemText, 
    DialogTitle,
    Button
} from '@mui/material';
import pokeball from './pokeball.svg' ;

const ListaTipos = [
    'Insecto',
    'Electrico',
    'Hada',
    'Luchador',
    'Fuego',
    'Volador',
    'Planta',
    'Tierra',
    'Normal',
    'Veneno',
    'Psiquico',
    'Agua',
] ; 

const ListaTipos2 = [
    'Volador',
    'Planta',
    'Tierra',
    'Veneno',
    'none',
] ; 

const ListaColores = [
    'Verde',
    'Naranja',
    'Azul',
    'Amarillo',
    'Cafe',
    'Morado',
    'Rojo',
    'Rosa',
    'Gris',
] ; 


export default function Preguntas( props ){


}



export const Tipo1 = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }

    return(
        <Dialog  onClose={ closeDialog } open = { open } >
            <DialogTitle> Cual es el tipo PRINCIPAL de su pokemon? </DialogTitle>
            <List>
                {
                    ListaTipos.map( ( tipo ) =>(
                        <ListItemButton key={ tipo } onClick={ () => {
                            props.handleOption( 'Tipo1', tipo ) ;
                            closeDialog() ;
                        } } >
                            <img src={ pokeball } width={24} height={24} />
                            <ListItemText> { tipo } </ListItemText>
                        </ListItemButton>
                    ) )
                }
            </List>
        </Dialog>

    ) ;
}

export const Tipo2 = ( props  ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog } open = { open } >
             <DialogTitle> Cual es el tipo SECUNDARIO de su pokemon? </DialogTitle>
            <List>
            {
                ListaTipos2.map( ( tipo ) =>(
                    <ListItemButton key={ tipo } onClick={ () => {
                        props.handleOption( 'Tipo2', tipo ) ;
                        closeDialog() ;
                    } } >
                       <img src={ pokeball } width={24} height={24} />
                        <ListItemText> { tipo } </ListItemText>
                    </ListItemButton>
                ) )
            }
            </List>
        </Dialog>  

    );
}

export const Cola = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon Tiene colita?  </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Cola', true ) ;
                    closeDialog()
                    
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Cola', false ) ;
                    closeDialog()
               } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>            
        </Dialog>  

    );
}

export const Pico = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon tiene pico? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Pico', true ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Pico', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Felino = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Felino? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Felino', true ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Felino', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Canino = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Canino? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Canino', true ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Canino', false ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Mamifero = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Mamifero? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Mamifero', true ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Mamifero', false ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>            
        </Dialog>  

    );
}
export const Roedor = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Roedor? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Roedor', true ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Roedor', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>            
        </Dialog>  

    );
}
export const Reptil = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Reptil? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Reptil', true ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Reptil', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Dinosaurio = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece Dinosaurio?  </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Dinosaurio', true ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Dinosaurio', false ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>            
        </Dialog>  

    );
}
export const Ash = ( props) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Sabe si su pokemon fue entrenado por ash Ketchum? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Ash', true ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Ash', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>   

                <ListItemButton onClick={ () => {
                    
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Sinceramente no se </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Vuela = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon puede volar? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Vuela', true ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Vuela', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  
    );
}
export const Colmillos = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon parece que tiene colmillos?  </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Colmillos', true ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.handleOption( 'Colmillos', false ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  

    );
}
export const Brazos = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Cuantos brazos tiene su pokemon? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Brazos', 0 ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> No tiene Brazos </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Brazos', 2 ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Tiene 2 Brazos </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Brazos', 4 ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Mas de dos </ListItemText>
                </ListItemButton>
            </List>
        </Dialog>  

    );
}
export const Patas = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Cuantas patas tiene su pokemon? </DialogTitle>
            <List>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Patas', 0 ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> No tiene </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Patas', 2 ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Tiene 2 </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Patas', 4 ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Tiene 4 </ListItemText>
                </ListItemButton>
                <ListItemButton onClick={ () => {
                    props.handleOption( 'Patas', 16 ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Muchas mas!  </ListItemText>
                </ListItemButton>
            </List>
        </Dialog>  
    );
}
export const Color = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> De que color es su pokemon? </DialogTitle>
            <List>
            {
                ListaColores.map( ( color ) =>(
                    <ListItemButton key={ color } onClick={ () => {
                        props.handleOption( 'Color', color ) ;
                        closeDialog()
                    } } >
                        <img src={ pokeball } width={24} height={24} />
                        <ListItemText> { color } </ListItemText>
                    </ListItemButton>
                ) )
            }
            </List>
        </Dialog>  
    
    );

}

export const Descartar = ( props ) => {
    const [ open , setOpen ] = React.useState( true ) ;
    const closeDialog = () =>{
        setOpen( false ) ;

    }
    return(
        <Dialog onClose={ closeDialog }  open = { open } >
             <DialogTitle> Su pokemon es { props.pokemon } ? </DialogTitle>
             <List>
                <ListItemButton onClick={ () => {
                    props.respuesta( props.pokemon ) ;
                    closeDialog()
                } } >
                    <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Si </ListItemText>
                </ListItemButton>

                <ListItemButton onClick={ () => {
                    props.descartar( props.pokemon ) ;
                    closeDialog()
                } } >
                     <img src={ pokeball } width={24} height={24} />
                    <ListItemText> Ño </ListItemText>
                </ListItemButton>    
            </List>
        </Dialog>  
    );

}