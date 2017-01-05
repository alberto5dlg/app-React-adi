import { Link } from 'react-router';
import React, { PropTypes } from 'react';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">Aplicacion React+Express ADI!</h2>
                <hr />
                <div className="jumbotron">
                    <p>Menu de navegacion</p>
                    <ol className="lead">
                        <li><Link to="/register">Registro</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/profile">Datos de Usuario</Link></li>
                    </ol>
                </div>
            </div>
        );
    }
}