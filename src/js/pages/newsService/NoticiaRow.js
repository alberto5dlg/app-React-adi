import React from 'react';
import NewsAPI from './NewsAPI';
import { Link } from 'react-router';


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
            edit = (<Link to={'/noticias/editar/'+this.props.noticiaID}>
                    <a className="badge glyphicon glyphicon-edit"> </a></Link>);
        }
        return (
            <tr>
                <td>
                    {this.props.noticiaID}
                </td>
                <td>
                    <Link to={'/noticias/'+this.props.noticiaID} >
                        {this.props.titular}
                    </Link>
                </td>
                <td>
                    {edit}
                    {remove}
                    <Link to={'/noticias/'+this.props.noticiaID} >
                        <a className="badge glyphicon glyphicon-eye-open" > </a>
                    </Link>
                </td>
            </tr>
        );
    }
}