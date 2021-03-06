import { Route, Switch } from 'react-router';
import './App.css';
import { Header } from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { SignInAndSignOutPage } from './pages/sign-in-and-sign-out/sign-in-and-sign-out';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignOutPage}/>
      </Switch>
    </div>
  );
}

export default App;
