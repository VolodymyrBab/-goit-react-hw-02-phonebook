import { Component } from "react";
import '../../src/index.css';
// import { ContactList } from "./ContList/ContList";
import { ContactForm } from "./ContForm/ContForm";



export class App extends Component {

state = {
  contacts: [
    {id: 'id-1', name: 'Jesus Christ', number: '777-77-77' },
    {id: 'id-2', name: 'Steve Jobs', number: '444-99-22'},
    {id: 'id-3', name: 'Stephen Wozniak', number: '645-17-79'},
    {id: 'id-4', name: 'Hanna Chylka', number: '227-91-26'},],
  filter: '',
}


render() {
  const contacts = this.filteredContacts();
  const filter = this.state.filter;
  // console.log(contacts);
  return <div className="container">
    <div className="in_container">
    <div>
        <h2 className="title">Phonebook</h2>
        {/* <Filter onFilterInput={this.onFilterInput} filter={filter} /> */}
        <ContactForm onAddContact={this.onAddContact}/>
    </div>
    <div>
      <h2 className="title">Contacts</h2>
        {/* <ContactList contacts={contacts} deleteContact={this.deleteContact} /> */}
      </div>
    </div>
    <div className="circle"></div>
  </div>
}
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
};
