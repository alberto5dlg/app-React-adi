import { Link } from 'react-router';
import React, { PropTypes } from 'react';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">404 - Not Found!</h2>
                <hr />
                <div className="text-center">
                    <Link to="/">Volver al Inicio</Link>
                </div>
            </div>
        );
    }
}