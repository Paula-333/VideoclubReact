
import React, {Component, Fragment} from "react";
import './PeliculasItem.css';


class PeliculasItem extends Component {
    
    constructor (props) {
        super(props);
        
        this.state = {
            pelicula: {}
        }
    };

    componentDidMount(){
        let res = JSON.parse(localStorage.getItem('datosPelicula'));

        this.setState({pelicula:res});

    }

    goBack(){
        this.props.history.push('/');
    }
    rentButton(){
        this.props.history.push('/register');
    }

    datosPeli(){
        if(this.state.pelicula?.id){
            return(
                <div className="peli">
                     
                    <img className="imagen" alt={this.state.pelicula.title} src= { `https://image.tmdb.org/t/p/w300${this.state.pelicula.poster_path}`}  ></img>
                   <div  className="peli2">
                   <div className="titulo"> {this.state.pelicula.title} </div>
                    <div className="Fecha"><p>Fecha de estreno: {this.state.pelicula.release_date} </p></div>
                    <div className="descripcion"> {this.state.pelicula.overview} </div>
                   </div> 
                </div>
            )
        }else{
            return(
                <div>CARGANDO LOS DATOS...</div>
            )
        }
       
    }
    
    render() {
        return(
           <Fragment>
                <div className="movie">
                {this.datosPeli()}
                
                </div>
                <div className="botones" >
                    <button className="atras" onClick={()=>this.goBack()}>ATRAS</button>
                    <button className="alquilar" onClick={()=>this.rentButton()}>ALQUILAR</button>
                </div>
        
           </Fragment>
        )
    }
    
    
};


export default PeliculasItem;