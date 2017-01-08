import React, { PropTypes } from 'react';
import {NewsList} from '../NewsServices/NewsList';

export default class NewsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {noticias:[]};
    }

    componentWillMount(){
        fetch('http://localhost:5000/api/noticias')
            .then((response) => {
                return response.json();
            })
            .then((datos) => {
                this.setState({noticias: datos})
            })

    }


    render() {
        if(this.state.noticias.length > 0){
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
                            <p> Cargando noticias ... </p>
                        </ol>
                    </div>
                </div>

            )
        }


    };
}