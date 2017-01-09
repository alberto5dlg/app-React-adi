import React from 'react';

export default class NoticiaRow extends React.Component{

    render(){
        return (
            <li>
                {this.props.titular}
            </li>
        );
    }
}