import React, { PropTypes } from 'react';
import NewsList from './newsService/NewsList';

export default class NewsPage extends React.Component {

    state = {
        noticias: [],
    }

    loadNews(){
        fetch('http://localhost:5000/api/noticias')
            .then((response) => {
                return response.json();
            })
            .then((datos) => {
                this.setState({noticias: datos.data})
            });
    }


    render() {
        this.loadNews();
        if(!this.state.noticias.isEmpty){
            return(
                <div className="container">
                    <h2 className="text-center">Listado de Noticias</h2>
                    <hr />
                    <div className="jumbotron">
                        <NewsList listado={this.state.noticias} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <h2 className="text-center">Listado de Noticias</h2>
                    <hr />
                    <div className="jumbotron">
                        <ol className="lead">
                            <p> No hay noticias ... </p>
                        </ol>
                    </div>
                </div>

            )
        }


    };
}