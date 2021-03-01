import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLoginForm from './components/AdminLoginForm';
import AdminPanel from './AdminPanel'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AdminLoginForm />
          </Route>

          <Route exact path="/admin-panel">
            <AdminPanel/>
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
