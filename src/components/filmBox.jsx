import React from 'react';
import FilmList from './filmList.jsx';

class FilmBox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1, 
                title: "Guardians of the Galaxy Vol. 2",
                times: "Mon: 1425, 1750, 1930, 2130"
            }]
        }
    }

    render() {
        return (
            <div className="film-box">
            <h2>Film Title</h2>
            <h2>Show Times</h2>
            <FilmList data={this.state.data}/>
            </div>
        )
    };

}


export default FilmBox;