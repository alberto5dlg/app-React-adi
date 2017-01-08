import React from 'react';
import NoticiaRow from './NoticiaRow';

export default class NewsList extends React.Component {

    render(){
        return (
            <ol className="lead">
                {this.props.listado.map((noticia) => {
                    return <NoticiaRow
                        key={noticia.noticiaID}
                        titular = {noticia.titular}
                        autor = {noticia.autor}
                        cuerpo = {noticia.cuerpoNoticia}
                        fecha = {noticia.fecha}
                    />
                })}
            </ol>
        )
    }
}