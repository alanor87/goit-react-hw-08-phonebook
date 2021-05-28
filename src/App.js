import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavHeader from './components/NavHeader';
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import ContactsView from './views/ContactsView'

class App extends Component {

  render() {
    return (
      <>
        <NavHeader />
        <Switch>
          <Route path='/login' component={LoginView} />
          <Route path='/register' component={RegisterView} />
          <Route path='/contacts' component={ContactsView} />
        </Switch>
      </>
    );
  }

}

export default App;
