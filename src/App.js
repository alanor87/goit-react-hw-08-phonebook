import React, { Component } from 'react';
import NavHeader from './components/NavHeader';
import ContactsView from './views/ContactsView'

class App extends Component {

  render() {
    return (
      <>
        <NavHeader />
        <ContactsView />
      </>
    );
  }

}

export default App;
