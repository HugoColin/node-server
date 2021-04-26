const exprees = require( 'express' );

class Server{

    constructor(){
        this.app = exprees();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicacion


        this.routes();
    }

    middlewares(){

        // Directorio público
        this.app.use( exprees.static( 'public' ) );

    }

    routes(){

        
    }

    listen(){

        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en puerto:', this.port );
        } );
    }

}

module.exports = Server;