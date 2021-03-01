import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLoginForm from './components/AdminLoginForm';
import Dashboard from './AdminPanelDashboard'
import NotFound from './NotFound'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <AdminLoginForm />
          </Route>
          <Route exact path="/admin">
            <AdminLoginForm />
          </Route>

          <Route exact path="/admin/dashboard">
            <Dashboard/>
          </Route>

          <Route exact path="*">
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
