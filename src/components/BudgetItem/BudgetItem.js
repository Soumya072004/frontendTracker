import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, debt, dollar, donation, education, emi, entertainment, food, freelance, healthcare, householdItems, housing, insurance, medical, money, personal, phone, piggy, retirement, savings, stocks, streamingServices, takeaway, tax, transportation, trash, tv, users, utilities, water, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function BudgetItem({
    b_id,
    uid,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const expenseCatIcon = () => {
        switch (category) {
            case 'Housing':
                return housing;
            case 'Tranportation':
                return transportation;
            case 'Food':
                return food;
            case 'Utilities':
                return utilities;
            case 'Clothing':
                return clothing;
            case 'Health Care':
                return healthcare;
            case 'Insurance':
                return insurance;
            case 'Supplies':
                return householdItems;
            case 'Personal':
                return personal;
            case 'Debt':
                return debt;
            case 'Retirement':
                return retirement;
            case 'Education':
                return education;
            case 'Savings':
                return savings;
            case 'Donation':
                return donation;
            case 'Entertainment':
                return entertainment;
            case 'Other':
                return piggy;
            default:
                return ''
        }
    }

    const categoryIcon = () => {
        switch (category) {
            case 'Rent':
                return housing;
            case 'Water Bill':
                return water;
            case 'Phone Bill':
                return phone;
            case 'Insurance':
                return insurance;
            case 'Internet Bill':
                return utilities;
            case 'Streaming Services':
                return streamingServices;
            case 'Education':
                return education;
            case 'Transport':
                return transportation;
            case 'Streaming Services':
                return streamingServices;
            case 'Health & Fitness':
                return healthcare;
            case 'EMI':
                return emi;
            case 'Tax':
                return tax;
            case 'Other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'budget' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{category}</h5>
                <div className="inner-content">
                    <div className="text">
                        <div className='items'>
                            <p className="para">{dollar} {amount}</p>
                            <p className="para">{calender} {dateFormat(date)}</p>
                        </div>
                        <p className="des">
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(b_id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
     background: linear-gradient(to right, 
    rgb(238, 221, 210), /* Light peach */
    rgb(225, 233, 213), /* Pale green */
    rgb(221, 232, 231), /* Light cyan */
    rgb(214, 220, 232), /* Light lavender */
    rgb(211, 221, 236)  /* Pale blue */
);
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 13%;
        padding: 1rem 2rem;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;
        i{
            font-size: 2.6rem;
        }
    }

    .content{
        width: 87%;
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;
        h5{
            font-size: 1.3rem;
            padding-left: 2rem;
            position: relative;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                width: 90%;
                display: flex;
                flex-direction: column;

                .items {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    .para{
                        width: 30%;
                        display: flex;
                        align-items: center;
                        gap: 0.4rem;
                        color: var(--primary-color);
                        opacity: 0.8;
                        font-size: 1rem;
                    }
                }
                .des {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        gap: 0.4rem;
                        color: var(--primary-color);
                        opacity: 0.8;
                        font-size: 1rem;
                }
                
            }
            .btn-con {
                width: 10%;
            }
        }
    }
`;

export default BudgetItem