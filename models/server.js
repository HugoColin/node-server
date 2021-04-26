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

        this.app.get( '/api', ( require, response ) => {
            response.json( {
                msg: 'get API',
            } );
        } );

        this.app.post( '/api', ( require, response ) => {
            response.json( {
                msg: 'post API',
            } );
        } );

        this.app.put( '/api', ( require, response ) => {
            response.json( {
                msg: 'put API',
            } );
        } );

        this.app.delete( '/api', ( require, response ) => {
            response.json( {
                msg: 'delete API',
            } );
        } );

    }

    listen(){

        this.app.listen( this.port, () => {
            console.log( 'Servidor corriendo en puerto:', this.port );
        } );
    }

}

module.exports = Server;