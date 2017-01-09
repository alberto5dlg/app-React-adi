import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import NewsList from './newsService/NewsList';

export default class NewsPage extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };

    state = {
        noticias: [],
        datos: undefined,
        pag: 0,
    };

    loadNews(nPag){
        fetch('http://localhost:5000/api/noticias/pag/'+nPag)
            .then((response) => {
                return response.json();
            })
            .then((datos) => {
                this.setState({noticias: datos.data,
                                datos: datos})
            });
    }
    componentDidMount() {
        this.loadNews(this.state.pag);
    }

    nextPage = (event) => {
        event.preventDefault();
        this.state.pag ++;
        this.loadNews(this.state.pag);
        this.context.router.push('/noticias');

    };
    lastPage = (event) => {
        event.preventDefault();
        if(this.state.pag >0)
            this.state.pag--;
        this.loadNews(this.state.pag);
        this.context.router.push('/noticias');
        console.log(this.state.pag);
    };


    render() {

        if(!this.state.noticias.isEmpty){
            return(
                <div className="container">
                    <h2 className="text-center">Listado de Noticias</h2>
                    <hr />
                    <div className="jumbotron">
                        <NewsList listado={this.state.noticias} />
                        <a className="col-md-8 text-left">
                            <Link onClick={this.lastPage} to="/noticias" >
                                Anterior
                            </Link>
                        </a>
                        <a className="col-md-4 text-right ">
                            <Link onClick={this.nextPage} to="/noticias" >
                                Siguiente
                            </Link>
                        </a>
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