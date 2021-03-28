import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AdminLoginForm from './components/forms/AdminLoginForm';
import Dashboard from './components/pages/AdminPanelDashboard';
import Accounts from './components/pages/AdminPanelAccounts';
import Addresses from './components/pages/AdminPanelAddresses'
import Items from './components/pages/AdminPanelItems'
import Restaurants from './components/pages/AdminPanelRestaurants';
import NotFound from './components/pages/NotFound';
import RestaurantsContextProvider from './context/restaurantsContext'
import AccountsContextProvider from './context/accountsContext'
import AddressesContextProvider from './context/addressesContext';
import ItemsContextProvider from './context/itemsContext';

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
              <Dashboard />
            </Route>

            <Route exact={true} path="/admin/accounts">
              <AccountsContextProvider>
                <Accounts />
              </AccountsContextProvider>
            </Route>
           
            <Route exact={true} path="/admin/addresses">
              <AddressesContextProvider>
                <Addresses/>
              </AddressesContextProvider>
            </Route>

            <Route exact={true} path="/admin/restaurants">
              <RestaurantsContextProvider>
                <Restaurants />
              </RestaurantsContextProvider>
            </Route>
            
            <Route exact={true} path="/admin/items">
              <ItemsContextProvider>
                <Items/>
              </ItemsContextProvider>
            </Route>


            <Route exact path="*">
              <NotFound />
            </Route>

          </Switch>
        </div>
      </Router>
  );
}

export default App;
