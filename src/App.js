import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {Route, Switch, Redirect} from 'react-router-dom'
import {MainLayout} from './styles/Layouts'
import Orb from './components/Orb/Orb'
import Navigation from './components/Navigation/Navigation'
import Dashboard from './components/Dashboard/Dashboard';
import Income from './components/Income/Income'
import Expenses from './components/Expenses/Expenses';
import LoginForm from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute'
import RegisterForm from './components/Register';
import Form from './components/Form/Form';
import Routing from './components/Routing/Routing';

//import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1)

  // const global = useGlobalContext()
  // console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      {/*}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
        {displayData()}
        </main>
      </MainLayout> */}
       <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/navigation" component={Routing} />
          {/* <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" /> */}
        </Switch>
        {/* <LoginForm/> */}
    </AppStyled>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main{
    flex: 1;
          background: linear-gradient(to right, 
    rgb(238, 221, 210), /* Light peach */
    rgb(225, 233, 213), /* Pale green */
    rgb(221, 232, 231), /* Light cyan */
    rgb(214, 220, 232), /* Light lavender */
    rgb(211, 221, 236)  /* Pale blue */
);

    border: 3px solid rgb(236, 204, 144);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
