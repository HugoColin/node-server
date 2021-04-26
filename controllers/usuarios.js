const { response } = require( 'express' );

const usuariosGet = ( req, res = response ) => {

    res.status( 201 ).json( {
        msg: 'get API - controlador',
    } );
};

const usuariosPost = ( req, res = response ) => {

    res.json( {
        msg: 'post API - controlador',
    } );
};

const usuariosPut = ( require, res = response ) => {
    res.json( {
        msg: 'put API - controlador',
    } );
}

const usuariosDelete = ( require, res = response ) => {
    res.json( {
        msg: 'delete API - controlador',
    } );
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}