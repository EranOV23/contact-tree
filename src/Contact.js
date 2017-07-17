import React from 'react';
import ContactList from "./ContactsList";


export default class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: props.id,
            expand: false,
        }
    };

    checkGroup(expand){
        if(this.props.contact.contacts)
        return <ContactList
                contacts={this.props.contact.contacts}
                expand={expand}
                id={this.state.id}/>
    }

    setExpend(){
        if(this.props.contact.contacts){
            console.log(`Expand group: ${this.state.id}`);
            this.setState({expand: !this.state.expand});
        } else {
            console.log(`No group`)
        }
    }

    render(){
        return( <li className="contact-item">
                    <h3 onClick ={()=> this.setExpend()}>{this.props.contact.name}</h3>
                    <ul>{this.checkGroup(this.state.expand)}</ul>
                </li>
        );
    }
}