//--------------------------- Made by Sohret --------------------------

import React, {Component} from 'react';
import './NoteItem.scss'


class NoteItem extends Component {
    render() {
        return (
            <div id={this.props.id} className='noteItem' style={{background: this.props.color}}>
                <div className='noteItem-title'>
                    {this.props.title}
                </div>
                <p className='noteItem-text'>
                    {this.props.text}
                </p>
            </div>
        );
    }
}

export default NoteItem;