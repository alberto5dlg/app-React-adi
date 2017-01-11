import React from 'react';
import auth from '../../../../utils/auth';

export default class NewsAPI extends React.Component {

     static APIDelete(noticiaID){
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

    static putNoticia(id, titular, cuerpoNoticia, autor){
        fetch('http://localhost:5000/api/noticias/'+id, {
            method:'PUT',
            headers:{
                'Authorization':'Basic '+ auth.loginPassTob64(localStorage.username, localStorage.password),
                'Content-type':'application/json'
            },
            body: JSON.stringify({
                "titular":titular,
                "cuerpoNoticia":cuerpoNoticia,
                "autor":autor
            })
        }).then(function (response) {
            if(response.ok) {
            }
        })

    }
}

