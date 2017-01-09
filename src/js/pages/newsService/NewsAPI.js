import React from 'react';
import auth from '../../../../utils/auth';

export default class NewsAPI extends React.Component {

     static APIDelete( noticiaID){
        fetch('http://localhost:5000/api/noticias/'+ noticiaID, {
            method:'DELETE',
            headers:{
                'Authorization':'Basic '+ auth.loginPassTob64(localStorage.username, localStorage.password)
            }
        }).then(function (response) {
            if(response.ok) {
            }
        })
    }
}

