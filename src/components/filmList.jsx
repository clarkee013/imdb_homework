import React from 'react'
import Film from './film.jsx'

class FilmList extends React.Component {
    render() {

        let filmNodes = this.props.data.map((film) => {
            return (
                <Film title={film.title} key={film.id}>
                    {film.times}
                </Film>
            );
        });

        return (
            <div className="film-list">
                {filmNodes}
            </div>
        );
    }


    }


    export default FilmList;