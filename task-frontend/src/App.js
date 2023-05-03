import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import TaskListTable from './components/TaskListTable';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import { AuthContext, useAuth } from './hooks/useAuth'

const App = (props) => {
  const auth = useAuth();
  
    return (
      <AuthContext.Provider value={auth} >
      <BrowserRouter>
      <div className="App">
        <NavBar onLinkClick={this.onRefreshHandler} />
        <div className="container" style={{ marginTop: 20 }}>
        <Switch>
          <Route exact path="/login" render={() => <Login onLoginSuccess={this.onRefreshHandler} /> } />
          <Route exact path="/form" component={TaskForm} />
          <Route exact path="/form/:id" component={TaskForm} />
          <Route path="/" component={TaskListTable} />

        </Switch>
        </div>    
      </div>
      </BrowserRouter>
      </AuthContext.Provider>
    );
}

export default App;
