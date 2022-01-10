import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import "./App.css";

const App = () => {
  return (
    <div className="mainBox">
      <section title="Phonebook" className="section">
        <h1>Phonebook</h1>
        <ContactForm />
      </section>

      <section title="Contacts" className="section">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </div>
  );
};

export default App;

// npm install --save gh-pages
// npm install --save-dev prop-types
// npm i uuid
