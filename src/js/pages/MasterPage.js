import React from 'react';
import {Link} from 'react-router';
import DocumentTitle from 'react-document-title';

import Header from './Header';

export default class MasterPage extends React.Component {
    render() {
        return(
            <DocumentTitle title='App React ADI'>
                <div className='MasterPage'>
                    <Header />
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}