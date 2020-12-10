import React, { Component } from 'react';
//import axios from 'axios'
import './Buscador.css';

class FormSearch extends Component {

    state = {     
        search: '',
        error: false
    }

    handleChange = e => {

        this.setState({
              search : e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault();

        const valueState = this.state.search;

         if(valueState === '' ) {
            this.setState({
                error: true
            });

            return;
         }
        
        const apiUrl =`https://api.themoviedb.org/3/search/movie?api_key=3e62fb2a0d94f7fd5ade1348729a33cf&language=es-ES&query=${valueState}`;

        const miInit = { method: 'GET'};

        fetch(apiUrl, miInit)
        .then(response => response.json())
        .then(data => {
    
            let filterArray = data.results[0]

            if (filterArray === undefined) {
                this.setState({
                    error: true
                });
                console.log('ERROR')
                return
                
            } else {

                this.props.getDatosResults(filterArray)

                this.setState({
                error: false
                })
            }
        });

    }

    render() {

        const { error } = this.state;

        return (
                <div>
                { error ? <div className="alerta">La pelicula no se encontro</div>  
                : null  }
                    <form className="search" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        className="search-input"
                        name='search'
                        placeholder="Escribe la pelicula"
                        onChange={this.handleChange}
                        value={this.state.search}
                        />
                        <button type="submit" className="buscar">Buscar</button>
                    </form>
                </div>
        )}
}

export default FormSearch;


