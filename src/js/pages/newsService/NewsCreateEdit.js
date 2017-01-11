import React from 'react';
import NewsAPI from './NewsAPI';

export default class NewsCreateEdit extends React.Component {

    static contextTypes = {
        router: React.PropTypes.object,
    };

    state ={
        elemento:'',
        titular:'',
        cuerpoNoticia:'',
        cabecera: '',
    };

    componentWillMount(){
        if(this.props.params.id != undefined) {
            this.loadDetailsNews();
            this.state.cabecera = (<h2 className="text-center">Editar Noticia</h2>);
        }else {
            this.state.cabecera = <h2 className="text-center">Crear Noticia</h2>
        }
    }

    setTitular = (e) => {
        this.setState({
            titular: e.target.value,
        });
    };

    setCuerpo = (e) => {
        this.setState({
            cuerpoNoticia: e.target.value,
        });
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
                this.setState({elemento: datos.noticia,
                                titular: datos.noticia.titular,
                                cuerpoNoticia: datos.noticia.cuerpoNoticia})
            });
    };

    postNews = (event) => {
        event.preventDefault();
        if(this.state.elemento != undefined)
            NewsAPI.putNoticia(this.state.elemento.noticiaID,this.state.titular,
                                this.state.cuerpoNoticia,this.state.elemento.autor);
        else
            NewsAPI.postNoticia(this.state.titular,this.state.cuerpoNoticia,localStorage.username);
        this.context.router.push('/noticias/'+this.state.elemento.noticiaID);

    };

    render() {
        return (
            <div className="container">
                {this.state.cabecera}
                <hr />

                <div className="col-md-2"></div>

                <div className=" row col-md-8 jumbotron ">

                    <label className="control-label">Titular:</label>
                    <input className="form-control focus" type="text"
                           onChange={this.setTitular} id="titularNoticia" value={this.state.titular}
                           placeholder="Titular de la noticia ..."/>

                    <label  className="control-label ">Noticia:</label>
                    <textarea rows="15" id="cuerpoNoticia" className="form-control focus animated"
                              type="text" onChange={this.setCuerpo} value={this.state.cuerpoNoticia}
                              placeholder="Escriba la descripcion de la noticia ..."/>

                    <h6></h6>

                    <div className="form-group">
                        <button onClick={this.postNews} className="btn btn-primary" id="Publicar" type="submit">
                            Publicar
                        </button>
                    </div>

                </div>
            </div>

        )
    }
}