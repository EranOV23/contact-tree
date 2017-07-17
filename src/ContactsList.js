import React from 'react';
import Contact from './Contact';

export default class ContactsList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            expand: props.expand,
        }
    }

    renderContacts(contact, i){
        return <ul key={i}>
                <Contact key={i} contact={contact} id={contact.id}/>
            </ul>
    }

    render(){
        if(this.props.expand){
            return(
                <div>
                    {this.props.contacts.map( (contact, i) => this.renderContacts(contact, i) )}
                </div>
            );
        }
        else return <div>

        </div>
    }
}
