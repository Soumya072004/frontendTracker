import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';
import Account from '../Account';

function Income() {
    const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext()

    useEffect(() => {
        getIncomes()
    }, [incomes])
    const [category, setCategory] = useState("All")
    const handleInput = name => e => {
        setCategory(e.target.value)
    }

    const _totalIncome = () => {
        if (category === "All")
            return totalIncome()
        else
            return incomes
                .filter(item => item.category === category)
                .reduce((sum, item) => sum + item.amount, 0);
    };


    return (
        <IncomeStyled>
            <InnerLayout>
                <div className="name-account-cont">
                    <h1>Incomes</h1>
                    <div className="selects input-control">
                        <select value={category} name="category" id="category" onChange={handleInput('category')}>
                            <option value="" disabled>Select Option</option>
                            <option value="All">All</option>
                            <option value="Salary">Salary</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Business Income">Business Income</option>
                            <option value="Investments">Investments</option>
                            <option value="Rental Income">Rental Income</option>
                            <option value="Bonuses">Bonuses</option>
                            <option value="Grants">Grants</option>
                            <option value="Pension">Pension</option>
                            <option value="Social Security">Social Security</option>
                            <option value="Alimony Child Support">Alimony/Child Support</option>
                            <option value="Gifts">Gifts</option>
                            <option value="Stipends">Stipends</option>
                            <option value="Scholarships">Scholarships</option>
                            <option value="Royalties">Royalties</option>
                            <option value="Lottery Gambling Winnings">Lottery/Gambling Winnings</option>
                            <option value="Tax Refunds">Tax Refunds</option>
                            <option value="Sale of Assets">Sale of Assets</option>
                            <option value="Crowd Funding">Crowd Funding</option>
                            <option value="Inheritance">Inheritance</option>
                            <option value="Other">Other</option>
                        </select>

                    </div>
                    <Account />
                </div>
                <h2 className="total-income">Total Income: <span>Rs. {_totalIncome()}</span></h2>
                <div className="income-content">
                    <div className="form-container">
                        <Form />
                    </div>
                    <div className="incomes">
                        {category === "All" ? (incomes.map((income) => {
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
                                deleteItem={deleteIncome}
                            />
                        })) : (incomes.filter(item => item.category === category).map((income) => {
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
                                deleteItem={deleteIncome}
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
            width: 67%;
            flex: 1;
        }
    }
`;

export default Income