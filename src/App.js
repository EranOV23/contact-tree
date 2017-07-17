import React from 'react';
import ContactsService from './services/ContactsService';
import ContactsList from './ContactsList';


import './style.scss';

export default class App extends React.Component {

    constructor(){
        super();
        this.getAllContacts();
        this.state = {
            contacts: [],
        }
    }

    getAllContacts(){
        ContactsService.getContacts()
            .then( (respond) => this.onContacts(respond) );
    }

    onContacts(data){
        this.setState({
            contacts: data.contacts,
        });
    }

    render(){
        return(
            <div className="app">
                <h1>Contact Tree</h1>
                <ContactsList contacts={this.state.contacts} expand={true}/>
            </div>
        )
    }
}