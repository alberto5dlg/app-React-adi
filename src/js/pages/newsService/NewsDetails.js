import React from 'react';
import NewsAPI from './NewsAPI';

export default class NewsDetails extends React.Component {

    state ={
        documento:'',
    };



    loadDetailsNews(){
        fetch('http://localhost:5000/api/noticias/'+this.props.params.id)
            .then((response) => {
                return response.json();
            })
            .then((datos) => {
                this.setState({documento: datos.noticia})
            });
    }
    componentDidMount() {
        this.loadDetailsNews();
    }


    render(){
        return(
            <div className="container">
                <h2 className="text-center">{this.state.documento.titular}</h2>
                <hr />
                <div className="jumbotron">
                    <p>{this.state.documento.cuerpoNoticia}</p>
                    <span className="col-md-8 text-left"><strong>{this.state.documento.autor}</strong></span>
                    <span className="col-md-4 text-right ">{this.state.documento.fecha}</span>
                </div>

            </div>
        )
    }
}