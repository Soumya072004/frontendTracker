import React, {useState, useEffect,useMemo} from 'react'
import './index.css'


import { useGlobalContext } from '../../context/globalContext';

function Account() {
  const {account,getAccount,totalBalance} = useGlobalContext();
  console.log("balance",totalBalance)
  useEffect(() => {
    getAccount();
}, []);

const puser = account && account[0] ? account[0] : {};
const { account_name, account_no} = puser;
    return (
    <div className = "account-cont">
        <h1 className = "account-name">Account Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:  <span className = "span-ele">{account_name}</span></h1>
        <p className = "account-name">Account Number : <span className = "span-ele">{account_no}</span></p>
        <p className = "account-name">Total Balance&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;: <span className = "span-ele">{totalBalance()}</span></p>
    </div>
  );
}




export default Account;
