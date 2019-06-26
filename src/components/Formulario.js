import React, { Component } from 'react';
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

class Fromulario extends Component {
    state = { 
        nombre: '',
        categoria: ''
     }
     // Si el usuario agregar un evento o categoria

     obtenerDatosEventos = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }

    render() { 
        return ( 
            <EventosConsumer>
                {(value) => {
                    

                    return (
                    <form onSubmit={e => {
                        e.preventDefault();

                        value.obtenerEventos(this.state);
                    }}>
                        <fieldset className="uk-fielset uk-margin">
                            <legend className="uk-legend uk-text-center">
                                Busca tu evento por nombre o Categoria
                            </legend>
                        </fieldset>

                        <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input name="nombre"
                                        type="text"
                                        className="uk-input"
                                        placeholder="Nombre de Evento o Ciudad"
                                        onChange={this.obtenerDatosEventos}
                                        />
                                </div>
                            
                            
                            <div className="uk-margin" uk-margin="true">
                                <select className="uk-select"
                                        name="categoria"
                                        onChange={this.obtenerDatosEventos}
                                    >
                                    <option value="">-- Selecciona Categoria --</option>
                                    <CategoriasConsumer>
                                        {(value) => {
                                            return (
                                                value.categorias.map(categoria => (
                                                    <option key={categoria.id} value={categoria.id} data-uk-form-select>{categoria.name_localized}</option>
                                                ))
                                            )
                                        }}
                                    </CategoriasConsumer>
                                </select>
                            </div>

                            <div>
                                <input type="submit" className="uk-button uk-button-danger" value="Busca Eventos" />
                            </div>
                        </div>
                    </form>
                    )
                }}
            </EventosConsumer>
         );
    }
}
 
export default Fromulario;