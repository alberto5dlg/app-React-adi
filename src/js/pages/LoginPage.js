import { Link } from 'react-router';
import React, { PropTypes } from 'react';
var auth = require('../../../utils/auth');

export default class LoginPage extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };

    state = {
        username: '',
        password: ''
    };

    login  = (event) => {
        event.preventDefault();
        auth.getLogIn(this.state.username, this.state.password);
        if (localStorage.loggedIn) {
            this.context.router.push('/');
        } else {
            this.context.router.push('/iucebui');
        }
    };

    setUsername = (e) => {
        this.setState({
            username: e.target.value,
        });
    };

    setPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    };

    render() {

        return (
            <div>

                <div className="text-center">
                    <h1>Formulario de Login</h1>
                </div>

                <div className="col-md-4"></div>

                <div className=" row col-md-4 ">

                    <label className="control-label">Login:</label>
                    <input className="form-control" type="text" placeholder="Nombre"
                           onChange={this.setUsername} />

                    <label  className="control-label">Password:</label>
                    <input className="form-control" type="password" placeholder="Password"
                           onChange={this.setPassword} />

                    <h6></h6>

                    <div className="form-group">
                        <button onClick={this.login} className="btn btn-primary" id="Entrar" type="submit">
                            Enviar
                        </button>
                    </div>

                </div>
            </div>

        );
    }
}