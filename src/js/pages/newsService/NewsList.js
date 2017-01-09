import React from 'react';
import NoticiaRow from './NoticiaRow';

export default class NewsList extends React.Component {

    render(){
        return (
            <ul className="list-group">
                {this.props.listado.map(function(noticia){
                    return (<NoticiaRow
                        key={noticia.noticiaID}
                        titular = {noticia.titular}
                        autor = {noticia.autor}
                        cuerpo = {noticia.cuerpoNoticia}
                        fecha = {noticia.fecha}
                        noticiaID={noticia.noticiaID}
                    />)
                })}
            </ul>
        )
    }
}