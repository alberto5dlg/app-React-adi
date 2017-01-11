import { Link } from 'react-router';
import React, { PropTypes } from 'react';
var auth = require('../../../utils/auth');

export default class IndexPage extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };
    
    logout  = (event) => {
        event.preventDefault();
        auth.getLogOut();
        this.context.router.push('/');
    };

    render() {

        var element,linkToLog;
        if(localStorage.loggedIn) {
            element = (<p>Bienvenido {localStorage.username}, que desea hacer</p>);
            linkToLog = (<li><Link onClick={this.logout} to="/">Logout</Link></li>);
        } else {
            element = (<p>Bienvenido Invitado, que desea hacer </p>);
            linkToLog = (<li><Link  to="/login">Login</Link></li>);
        }

        return (
            <div className="container">
                <h2 className="text-center">Aplicacion React+Express ADI!</h2>
                <hr />
                <div className="jumbotron">
                    {element}
                    <ol className="lead">
                        <li><Link to="/noticias">Noticias</Link></li>
                        {linkToLog}
                    </ol>
                </div>
            </div>
        );
    }
}