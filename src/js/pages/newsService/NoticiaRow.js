import React from 'react';
import NewsAPI from './NewsAPI';

export default class NoticiaRow extends React.Component{

    static contextTypes = {
        router: React.PropTypes.object,
    };

    removeNews = (event) => {
        event.preventDefault();
        NewsAPI.APIDelete(this.props.noticiaID);
        this.context.router.push('/');
    };

    render(){
        var remove,edit;
        if(localStorage.loggedIn) {
            remove = (<a className="badge glyphicon glyphicon-trash" onClick={this.removeNews}> </a>);
            edit = (<a className="badge glyphicon glyphicon-edit"> </a>);
        }
        return (
            <li className="list-group-item " >
                 {this.props.titular}
                {remove}
                {edit}
                <a className="badge glyphicon glyphicon-eye-open"> </a>

            </li>
        );
    }
}