import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
    token = 'ABYW7E45LRWZU6VLE63P';
    ordenar = 'date';

    state = { 
        eventos : []
     }

    // Metodo que va a obtener los eventos 
    obneterEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;

        const eventos = await axios(url);

        // console.log(eventos.data.events);
        this.setState({
            eventos : eventos.data.events
        })

    }

    render() { 
        return ( 
            <EventosContext.Provider
                value={{
                    eventos : this.state.eventos,
                    obtenerEventos: this.obneterEventos
                }}
                >
                {this.props.children}
            </EventosContext.Provider>
         );
    }
}
 

export default EventosProvider;