//----------------------------------- Made by Sohret----------------------------

import React, {Component} from 'react';
import NoteItem from "../NoteItem/NoteItem";
import './Actual.scss'
import {Link} from "react-router-dom";

class Actual extends Component {
    state = {
        datastore: [],
    };

    componentDidMount() {
        fetch('http://localhost:3000/notes')
            .then(res => res.json())
            .then(data => this.setState({
                datastore: data.reverse()
            }))
            .then(() => console.log(this.state.datastore));
    }

    render() {
        return (
            <div className='actual'>
                {
                    this.state.datastore.map(noteItem => {
                        console.log(noteItem);
                        if (noteItem.completed === false) {
                            return (
                                //---------------- Made by Ismayil / 31-34--------------
                                <Link to={{
                                    pathname: `/note/${noteItem.id}`,
                                }}
                                      key={noteItem.id}>
                                    <NoteItem onclick={this.checkClickedNote}
                                              title={noteItem.title}
                                              text={noteItem.text}
                                              color={noteItem.color}
                                              id={noteItem.id}/>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        );
    }
}

export default Actual;