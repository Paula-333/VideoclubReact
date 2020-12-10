
import React, {Component, Fragment} from "react";
import './Home.css';
import axios from 'axios';
import FormSearch from "../../Components/Buscar/Buscador";

let foto = {photo:'./movieTime.jpg'}

class Home extends Component {
    constructor (props) {
        super(props);

        this.state = {
            peliculas : [],
            page: 1,
            text:'',
            dataResults: [],
            hideText: false,
        }
        
    };
    

    async componentDidMount(){
        
        try {
            const peliculas = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3e62fb2a0d94f7fd5ade1348729a33cf&language=es-ES&page=${this.state.page}`);
            console.log(peliculas.data.results);
            this.setState({peliculas: peliculas.data.results})
        }catch (err){
            console.log(err);
        }
          
    }

    mostrarPeliculas(){

        if(this.state.peliculas[0]){
            return(
                this.state.peliculas.map(pelicula => {
                    
                    return(
                        <div className="movies2" key={pelicula.id}>
                            
                            <img alt={pelicula.title} src={`https://image.tmdb.org/t/p/w300${pelicula.poster_path}`} onClick={()=>this.selecionarPelicula(pelicula)}></img>
                        </div>
                    
                    )
                }))         
        }else{
            return(<div>¡CARGANDO PELICULAS!</div>)
        }   
    }

    selecionarPelicula(pelicula){
        
        this.props.history.push('/peliculaDescripcion');
        localStorage.setItem('datosPelicula', JSON.stringify(pelicula));
    };

    irPelicula(datos){
        localStorage.setItem('datosPelicula', JSON.stringify(datos));
        this.props.history.push('/peliculaBuscar');

    };

    nextPage = () =>{
        this.setState(prevState => ({page: prevState.page + 1}), ()=>{
            this.componentDidMount(this.state.page)  
        })    
    };
    
    backPage = () => {
        this.setState(prevState => ({page: prevState.page - 1}), ()=>{
            this.componentDidMount(this.state.page)  
        })    
    };

    //Obtengo los datos de FormSearch para pasarle el estado a Results
    getDatosResults = datos => {

        const dataResults =  datos 
            this.setState({
                dataResults,
                hideText: true
            })
        this.irPelicula(datos);

        }
    
    render() {
        return(
            <Fragment> 
               <div> <img src={foto.photo} alt="cinema" className="foto"/></div> 
                 
               <div className="div-movies">
                <button className="anterior" onClick={()=> this.backPage()}>ANTERIOR</button>
                <FormSearch getDatosResults={this.getDatosResults}/>
                <button className="siguiente" onClick={()=> this.nextPage()}>SIGUIENTE</button>
                </div>
               <div className="movies" >{this.mostrarPeliculas()}</div>
                
             </Fragment>
        );
    };
    
    
}

 export default Home;