import React from 'react';
import {Link} from 'react-router';
var auth = require('../../../utils/auth');

export default class Header extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };

    logout  = (event) => {
        event.preventDefault();
        auth.getLogOut();
        this.context.router.push('/');
    };

    render() {
        var element,listUsers;
        if (!localStorage.loggedIn){
            element = (<li><Link to='/login'> Login </Link></li>);
        } else {
            element = (<li><Link to='/' onClick={this.logout}> Logout </Link></li>)
            listUsers=  (<li><a href="/usuarios">Usuarios</a></li>);
        }
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div id="navbar-collapse" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to='/'> Inicio </Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to='/noticias'> Noticias </Link></li>
                            {listUsers}
                            {element}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}