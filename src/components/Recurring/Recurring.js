import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import BudgetItem from '../BudgetItem/BudgetItem';
import RecurringForm from './RecurringForm';
import Account from '../Account';

function Recurring() {
    const {recurring, getRecurring, deleteRecurring, totalRecurring} = useGlobalContext()

    useEffect(() =>{
        getRecurring()
    }, [recurring])
    const [category, setCategory] = useState("All")
    const handleInput = name => e => {
        setCategory(e.target.value)
    }
    const _totalRecurring = () => {
        if (category === "All")
            return totalRecurring()
        else
            return recurring
                .filter(item => item.category === category)
                .reduce((sum, item) => sum + item.amount, 0);
    };
    return (
        <IncomeStyled>
            <InnerLayout>
                <div className = "name-account-cont">
                    <h1>Recurring Transactions</h1>
                    <div className="selects input-control">
                <select value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
                    <option value="All">All</option>
                    <option value="Rent">Rent</option>
                    <option value="Water Bill">Water Bill</option>
                    <option value="Phone Bill">Phone Bill</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Internet Bill">Internet Bill</option>
                    <option value="Streaming Services">Streaming Services</option>  
                    <option value="Education">Education</option>  
                    <option value="Transport">Transport</option>  
                    <option value="Health & Fitness">Health & Fitness</option>  
                    <option value="EMI">EMI</option>  
                    <option value="Tax">Tax</option>  
                    <option value="Other">Other</option>  
                </select>
            </div>
                    <Account/>
                </div>
                <h2 className="total-income">Total Recurring bills: <span>Rs. {_totalRecurring()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <RecurringForm />
                    </div>
                    <div className="incomes">
                        {category === "All" ? (recurring.map((income) => {
                            const {r_id,uid, amount, date, category, description} = income;
                            return <BudgetItem
                                key={r_id}
                                b_id={r_id} 
                                uid = {uid}
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type="recurring"
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteRecurring}
                            />
                        })) : (recurring.filter(item => item.category === category).map((income) => {
                            const {r_id,uid, amount, date, category, description} = income;
                            return <BudgetItem
                                key={r_id}
                                b_id={r_id} 
                                uid = {uid}
                                description={description} 
                                amount={amount} 
                                date={date} 
                                type="recurring"
                                category={category} 
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteRecurring}
                            />
                        }))}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
    .name-account-cont{
        display: flex;
        justify-content: space-between;
         .input-control{
        border: 2px solid rgb(211, 193, 148);
    background-color: rgb(255, 243, 244);
    border-radius: 20px;
    padding: 10px;
        height:3rem;
         select{
         border: none;
                     background-color: transparent;
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-start;
        outline: none;
        select{
            border: none;
            background-color: transparent;
            color: rgba(34, 34, 96, 0.4);
            outline: none;
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
                            border: none;
            background-color: transparent;
            }
        }
    }
    }
    display: flex;
    flex-direction:column;
    height:90vh;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
      
        width: 100%;
        display: flex;
        gap: 2rem;
        .form-container {
          
            padding: 0px;
            width: 30%;
        }
        .incomes{
     
            flex: 1;
        }
    }
`;

export default Recurring