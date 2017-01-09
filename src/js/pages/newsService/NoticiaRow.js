import React from 'react';

export default class NoticiaRow extends React.Component{

    render(){
        return (
            <li className="list-group-item " >
                {this.props.titular}
            </li>
        );
    }
}