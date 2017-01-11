import React from 'react';
import { Link } from 'react-router';

export default class NewsDetails extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };

    state ={
        documento:'',
    };

    loadDetailsNews(){
        fetch('http://localhost:5000/api/noticias/'+this.props.params.id)
            .then((response) => {
                if (response.status == 200 )
                    return response.json();
                else
                    this.context.router.push('/error');
            })
            .then((datos) => {
                this.setState({documento: datos.noticia})
            });
    }

    componentDidMount() {
        this.loadDetailsNews();
    }

    componentWillMount(){
        this.compParam();
    }
    compParam(){
        if(isNaN(this.props.params.id))
            this.context.router.push('/error');
    }

    render(){
        return (
            <div className="container">
                <h2 className="text-center">{this.state.documento.titular}</h2>
                <hr />
                <div className="jumbotron">
                    <p>{this.state.documento.cuerpoNoticia}</p>
                    <span className="col-md-8 text-left"><strong>{this.state.documento.autor}</strong></span>
                    <span className="col-md-4 text-right ">{this.state.documento.fecha}</span>
                </div>
                <div className="text-center">
                    <Link to="/noticias">Volver a Noticias</Link>
                </div>
            </div>
        )
    }
}