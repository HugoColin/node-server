const exprees = require( 'express' );
const cors = require( 'cors' );

class Server{

    constructor(){

        this.app = exprees();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion
        this.routes();
    }

    middlewares(){

        // Cors
        this.app.use( cors() );

        // Directorio público
        this.app.use( exprees.static( 'public' ) );

    }

    routes(){
        
        this.app.use( this.usuariosPath, require( '../routes/usuarios' ) );

    }

    listen(){

        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en puerto:', this.port );
        } );
    }

}

module.exports = Server;