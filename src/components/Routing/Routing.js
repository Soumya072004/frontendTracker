// import React, {useState, useMemo, Component} from 'react'
// import styled from "styled-components";
// import {MainLayout} from '../../styles/Layouts'
// import Orb from '../Orb/Orb'
// import Navigation from '../Navigation/Navigation'
// import Dashboard from '../Dashboard/Dashboard'
// import Income from '../Income/Income'
// import Expenses from '../Expenses/Expenses';
// import { useGlobalContext } from '../../context/globalContext';
// import Budget from '../Budget/Budget';
// import Recurring from '../Recurring/Recurring';

// class Routing extends Component{

 

 
//    displayData = () => {
//     switch(active){
//       case 1:
//         return <Dashboard />
//       case 2:
//         return <Dashboard />
//       case 3:
//         return <Income />
//       case 4: 
//         return <Expenses />
//       case 5: 
//         return <Recurring />
//       case 6: 
//         return <Budget />
//       default: 
//         return <Dashboard />
//     }
//   }


//  render(){
//   const [active, setActive] = useState(1)

//   const global = useGlobalContext()
//   console.log(global);
 
//   return (
//     <MainLayout>
//       <Navigation active={active} setActive={setActive} props={this.props} />
//       <main>
//         {this.displayData()}
//       </main>
//     </MainLayout>
// );
//  }

// }


// export default Routing;

import React, { useState } from 'react';
import styled from "styled-components";
import { MainLayout } from '../../styles/Layouts';
import Orb from '../Orb/Orb';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import Income from '../Income/Income';
import Expenses from '../Expenses/Expenses';
import { useGlobalContext } from '../../context/globalContext';
import Budget from '../Budget/Budget';
import Recurring from '../Recurring/Recurring';
import BudgetChart from '../BudgetChart/BudgetChart';

const Routing = (props) => {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(props);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <BudgetChart />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      case 5: 
        return <Recurring />
      case 6: 
        return <Budget />
      default: 
        return <Dashboard />
    }
  }

  return (
    <MainLayout>
      <Navigation active={active} setActive={setActive} {...props} />
      <main>
        {displayData()}
      </main>
    </MainLayout>
  );
}

export default Routing;
