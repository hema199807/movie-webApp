import React from 'react';
import '../App.css';

const MovieCards = (props) => {
    const {Title,Year,imdbID,Type,Poster}=props
    return ( <div>
        <div className="card m-2">
            <div className="image">
            <img src={Poster} className="card-img-top" alt={Title}/>
            <div className="movieName-overly">
                    <div className="title">{Title}</div>
            </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year}</p>
            </div>
        </div>
    </div> );
}
 
export default MovieCards;