class ContactsService{

    constructor(){
        this.url = "../../data/data.json";
    }

    getContacts(){
        console.log("requested Contacts");
        return fetch(this.url).then( (response) => { return (response.json()) })
    }

}

module.exports = new ContactsService();
