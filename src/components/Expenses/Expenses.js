import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';
import Account from '../Account';

function Expenses() {
    const {expenses, getExpenses, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() =>{
        getExpenses()
    }, [expenses])
    const [category, setCategory] = useState("All")
    const handleInput = name => e => {
        setCategory(e.target.value)
    }
    const _totalExpenses = () => {
        if (category === "All")
            return totalExpenses()
        else
            return expenses
                .filter(item => item.category === category)
                .reduce((sum, item) => sum + item.amount, 0);
    };
    return (
        <IncomeStyled>
            <InnerLayout>
            <div className = "name-account-cont">
                    <h1>Expenses</h1>
                    <div className="selects input-control">
                <select value={category} name="category" id="category" onChange={handleInput('category')}>
                <option value=""  disabled >Select Option</option>
                <option value="All">All</option>
                    <option value="Housing">Housing</option>
                    <option value="Tranportation">Tranportation</option>
                    <option value="Food">Food</option>
                    <option value="Utilities">Utilities</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Health Care">Health Care</option>  
                    <option value="Insurance">Insurance</option>  
                    <option value="Supplies">Supplies</option>
                    <option value="Personal">Personal</option>
                    <option value="Debt">Debt</option>  
                    <option value="Retirement">Retirement</option>
                    <option value="Education">Education</option>
                    <option value="Savings">Savings</option>
                    <option value="Donation">Donation</option>  
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>   
                </select>
            </div>
                    <Account/>
            </div>
                <h2 className="total-income">Total Expense: <span>Rs. {_totalExpenses()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm />
                    </div>
                    <div className="incomes">
                        {category === "All" ? (expenses.map((income) => {
                            const { t_id, a_id, amount, date, time, category, description, type } = income;
                            return <IncomeItem
                                key={t_id}
                                t_id={t_id}
                                a_id={a_id}
                                description={description}
                                amount={amount}
                                date={date}
                                time={time}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })) : (expenses.filter(item => item.category === category).map((income) => {
                            const { t_id, a_id, amount, date, time, category, description, type } = income;
                            return <IncomeItem
                                key={t_id}
                                t_id={t_id}
                                a_id={a_id}
                                description={description}
                                amount={amount}
                                date={date}
                                time={time}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
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

export default Expenses