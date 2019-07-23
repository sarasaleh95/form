import React, { components } from 'react';
import './App.css';
import { UserForm } from './components/UserForm';

class App extends components {
render() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}
}
export default App;
