import React, { useContext, useState,useEffect } from "react"
import Cookies from 'js-cookie'




const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [budget, setBudget] = useState([])
    const [recurring, setRecurring] = useState([])  
    const [error, setError] = useState(null)
    const [user,setUser]=useState([])
    const [account,setAccount]=useState([])

//incomes

    const getIncomes = async () => {
        // this.setState({
        //   apiStatus: apiStatusConstants.inProgress,
        // })
        const jwtToken = Cookies.get('jwt_token')
        // const {
        //   activeOptionId,
        //   activeCategoryId,
        //   searchInput,
        //   activeRatingId,
        // } = this.state
        const apiUrl = `http://localhost:3001/users/transactions/income`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json();
        
            setIncomes(data);
        
      }
    
      // useEffect(() => {
      //   getIncomes();
      // }, [incomes]);

    //calculate incomes
    const addIncome = async (event, income) => {
        event.preventDefault();
        const jwtToken = Cookies.get('jwt_token')
        const url = 'http://localhost:3001/users/transactions/';
        const options = {
          method: 'POST',
          headers: {
                 Authorization: `Bearer ${jwtToken}`,
                 'Content-Type': 'application/json',
               },
          body: JSON.stringify(income),
        };
      
        const response = await fetch(url, options);
        const data = await response.json();
      
      
          getIncomes();
      
      }
      
    

    const deleteIncome = async (id) => {
        // const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `http://localhost:3001/users/transactions/${id}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'DELETE',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            getIncomes()
        } 
        
    }

    const totalIncome = () => {
        console.log("incom",incomes)
        let totalIncome = 0;
        incomes.forEach((income) =>{
            totalIncome = totalIncome + income.amount
        })

        return totalIncome;
    }

//Expenses

    const getExpenses = async () => {
        // this.setState({
        //   apiStatus: apiStatusConstants.inProgress,
        // })
        const jwtToken = Cookies.get('jwt_token')
        // const {
        //   activeOptionId,
        //   activeCategoryId,
        //   searchInput,
        //   activeRatingId,
        // } = this.state
        const apiUrl = `http://localhost:3001/users/transactions/expense`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'GET',
        }
        const response = await fetch(apiUrl, options)
        const data = await response.json();
        
            setExpenses(data);
        
      }
    
      // useEffect(() => {
      //   getExpenses();
      // }, [expenses]);

    const addExpense = async (event, expense) => {
        event.preventDefault();
        const jwtToken = Cookies.get('jwt_token')
        const url = 'http://localhost:3001/users/transactions/';
        const options = {
          method: 'POST',
          headers: {
                 Authorization: `Bearer ${jwtToken}`,
                 'Content-Type': 'application/json',
               },
          body: JSON.stringify(expense),
        };
      
        const response = await fetch(url, options);
        const data = await response.json();
      
      
          getExpenses();
      
      }
      const deleteExpense = async (id) => {
        // const res  = await axios.delete(`${BASE_URL}delete-Expenses/${id}`)
        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = `http://localhost:3001/users/transactions/${id}`
        const options = {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
          method: 'DELETE',
        }
        const response = await fetch(apiUrl, options)
        if (response.ok) {
            getExpenses()
        } 
        
    }

    const totalExpenses = () => {
        
        let totalExpenses = 0;
        expenses.forEach((e) =>{
            totalExpenses = totalExpenses +e.amount
        })

        return totalExpenses;
    }

//budget

const getBudget = async () => {
  // this.setState({
  //   apiStatus: apiStatusConstants.inProgress,
  // })
  const jwtToken = Cookies.get('jwt_token')
  // const {
  //   activeOptionId,
  //   activeCategoryId,
  //   searchInput,
  //   activeRatingId,
  // } = this.state
  const apiUrl = `http://localhost:3001/users/budget/`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  const data = await response.json();
  
      setBudget(data);
  
}

// useEffect(() => {
//   getBudget();
// }, [budget]);


const addBudget = async (event, budget) => {
  event.preventDefault();
  const jwtToken = Cookies.get('jwt_token')
  const url = 'http://localhost:3001/users/budget/';
  const options = {
    method: 'POST',
    headers: {
           Authorization: `Bearer ${jwtToken}`,
           'Content-Type': 'application/json',
         },
    body: JSON.stringify(budget),
  };

  const response = await fetch(url, options);
  const data = await response.json();


    getBudget();

}



const deleteBudget = async (id) => {
  // const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
  const jwtToken = Cookies.get('jwt_token')
  const apiUrl = `http://localhost:3001/users/budget/${id}`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'DELETE',
  }
  const response = await fetch(apiUrl, options)
  if (response.ok) {
      getBudget()
  } 
  
}

const totalBudget = () => {
  let totalBudget = 0;
  budget.forEach((b) =>{
      totalBudget = totalBudget + b.amount
  })

  return totalBudget;
}

//recurring

const getRecurring = async () => {
  // this.setState({
  //   apiStatus: apiStatusConstants.inProgress,
  // })
  const jwtToken = Cookies.get('jwt_token')
  // const {
  //   activeOptionId,
  //   activeCategoryId,
  //   searchInput,
  //   activeRatingId,
  // } = this.state
  const apiUrl = `http://localhost:3001/users/recurring/`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'GET',
  }
  const response = await fetch(apiUrl, options)
  const data = await response.json();
  
      setRecurring(data);
  
}

// useEffect(() => {
//   getRecurring();
// }, [recurring]);


const addRecurring = async (event, recurring) => {
  event.preventDefault();
  const jwtToken = Cookies.get('jwt_token')
  const url = 'http://localhost:3001/users/recurring/';
  const options = {
    method: 'POST',
    headers: {
           Authorization: `Bearer ${jwtToken}`,
           'Content-Type': 'application/json',
         },
    body: JSON.stringify(recurring),
  };

  const response = await fetch(url, options);
  const data = await response.json();


    getRecurring();

}



const deleteRecurring = async (id) => {
  // const res  = await axios.delete(`${BASE_URL}delete-income/${id}`)
  const jwtToken = Cookies.get('jwt_token')
  const apiUrl = `http://localhost:3001/users/recurring/${id}`
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: 'DELETE',
  }
  const response = await fetch(apiUrl, options)
  if (response.ok) {
      getRecurring()
  } 
  
}

const totalRecurring = () => {
  let totalRec = 0;
  recurring.forEach((r) =>{
      totalRec = totalRec + r.amount
  })

  return totalRec;
}

//total balance

    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

//transaction history

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
        })

        return history.slice(0, 3)
    }


    const getUser = async () => {
      // this.setState({
      //   apiStatus: apiStatusConstants.inProgress,
      // })
      const jwtToken = Cookies.get('jwt_token')
      // const {
      //   activeOptionId,
      //   activeCategoryId,
      //   searchInput,
      //   activeRatingId,
      // } = this.state
      const apiUrl = `http://localhost:3001/users/details/`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json();
      console.log("data",data)
          setUser(data);
      
    }

    useEffect(() => {
      getUser();
    }, []);
  
    const getAccount = async () => {
      // this.setState({
      //   apiStatus: apiStatusConstants.inProgress,
      // })
      const jwtToken = Cookies.get('jwt_token')
      // const {
      //   activeOptionId,
      //   activeCategoryId,
      //   searchInput,
      //   activeRatingId,
      // } = this.state
      const apiUrl = `http://localhost:3001/users/account/`
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: 'GET',
      }
      const response = await fetch(apiUrl, options)
      const data = await response.json();
      
          setAccount(data);
      
    }

    useEffect(() => {
      getAccount();
    }, []);


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            addBudget,
            getBudget,
            budget,
            deleteBudget,
            totalBudget,
            addRecurring,
            getRecurring,
            recurring,
            deleteRecurring,
            totalRecurring,
            totalBalance,
            transactionHistory,
            error,
            setError,
            user,
            getUser,
            account,
            getAccount,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}