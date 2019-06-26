import React from 'react';
import PropTypes from 'prop-types';

const Evento = ({evento}) => {

    // Extraer el texto
    let { text } = evento.description;
    if(text){
        if(text.length > 250){
            text = text.substr(0, 250)
        } 
    } else {
        text = null
    }

    return ( 
        <div>
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {evento.logo ?
                        <img src={evento.logo.url} alt={evento.name} />
                        : null}
                </div>
                <div className="uk-card-body">
                        <h3 className="uk-card-title">{evento.name.text}</h3>
                        {text}
                </div>
                <div className="uk-card-footer">
                    <a target="_blank" rel="noopener noreferrer" href={evento.url} className="uk-button uk-button-secondary">
                        Más Informacion
                    </a>
                </div>
            </div>
        </div>
        
     );
}

Evento.protoType = {
    evento: PropTypes.object.isRequired
}
 
export default Evento;