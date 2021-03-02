import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLoginForm from './components/AdminLoginForm';
import Dashboard from './AdminPanelDashboard';
import Accounts from './AdminPanelAccounts';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/">
            <AdminLoginForm />
          </Route>
          <Route exact={true} path="/admin">
            <AdminLoginForm />
          </Route>

          <Route exact={true} path="/admin/dashboard">
            <Dashboard/>
          </Route>
          <Route exact={true} path="/admin/accounts">
            <Accounts/>
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
