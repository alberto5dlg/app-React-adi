import React from 'react';
import NoticiaRow from './NoticiaRow';

export default class NewsList extends React.Component {

    render(){
        return (
            <table className="table table-bordered table-hover">
                <thead>
                <tr>
                    <th>Noticia ID</th>
                    <th>Titular</th>
                    <th>Opciones</th>
                </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        )
    }
}