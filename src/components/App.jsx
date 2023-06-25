import { Component } from "react";
import '../../src/index.css';
import { ContactList } from "./ContList/ContList";
import { ContactForm } from "./ContForm/ContForm";
import { Filter } from "./Filter/Filter";



export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Jesus Christ', number: '777-77-77' },
    {id: 'id-2', name: 'Steve Jobs', number: '444-99-22'},
    {id: 'id-3', name: 'Stephen Wozniak', number: '645-17-79'},
    {id: 'id-4', name: 'Freddie Mercury', number: '227-91-26'},
    {id: 'id-5', name: 'Woodrow Wilson', number: '645-17-79'},
    {id: 'id-6', name: 'Adam Mickiewicz', number: '227-91-26'}],
  filter: '',
}

onAddContact = (obj) => {
  const equalName = this.state.contacts.find(
    element => element.name.toLowerCase() === obj.name.toLowerCase()
  );
  if (equalName) return alert(`${equalName.name} is already in contacts.`)
  this.setState(prevState => ({
    contacts: [...prevState.contacts, obj],
  }))
}

filteredContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedValue = filter.toLowerCase();

  const filteredContactsArray = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedValue));
  // console.log(filteredContactsArray);
  return filteredContactsArray;
}

// onFilterInput = (value) => {
//   this.setState({ filter: value });
// }
changeFilter = filter => {
  this.setState({ filter: filter.toLowerCase() });
};

deleteContact = (id) => {
  this.setState(prevState => ({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
}


render() {
  const contacts = this.filteredContacts();
  
  // console.log(contacts);
  return <div className="container">
    
    <div>
      <h2 className="title">Phonebook</h2>
      {/* <Filter onFilterInput={this.onFilterInput} filter={filter} /> */}
      <Filter onChange={this.changeFilter} />
      <ContactForm onAddContact={this.onAddContact}/>
    </div>
    <div>
      <h2 className="title">Contacts</h2>

      <ContactList contacts={contacts} deleteContact={this.deleteContact} />
    </div>
  </div>
    
 
}

};
