import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import Button from '../Button/Button';
import { bitcoin, book, calender, clock, card, circle, clothing, comment, debt, dollar, donation, education, entertainment, food, freelance, healthcare, householdItems, housing, insurance, medical, money, personal, piggy, retirement, savings, stocks, takeaway, transportation, trash, tv, users, utilities, yt } from '../../utils/Icons';

function IncomeItem({
    t_id,
    a_id,
    amount,
    date,
    time,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    // const categoryIcon = () =>{
    //     switch(category) {
    //         case 'salary':
    //             return money;
    //         case 'freelancing':
    //             return freelance
    //         case 'investments':
    //             return stocks;
    //         case 'stocks':
    //             return users;
    //         case 'bitcoin':
    //             return bitcoin;
    //         case 'bank':
    //             return card;
    //         case 'youtube':
    //             return yt;
    //         case 'other':
    //             return piggy;
    //         default:
    //             return ''
    //     }
    // }

    const categoryIcon = () => {
        switch (category) {
            case 'Salary':
                return <i class="fas fa-briefcase"></i>;
            case 'Freelance':
                return <i class="fas fa-laptop-code"></i>;
            case 'Business Income':
                return <i class="fas fa-chart-line"></i>;
            case 'Investments':
                return <i class="fas fa-piggy-bank"></i>;
            case 'Rental Income':
                return <i class="fas fa-home"></i>;
            case 'Bonuses':
                return <i class="fas fa-award"></i>;
            case 'Grants':
                return <i class="fas fa-hand-holding-usd"></i>;
            case 'Pension':
                return <i class="fas fa-university"></i>;
            case 'Social Security':
                return <i class="fas fa-shield-alt"></i>;
            case 'Alimony Child Support':
                return <i class="fas fa-child"></i>;
            case 'Gifts':
                return <i class="fas fa-gift"></i>;
            case 'Stipends':
                return <i class="fas fa-money-bill-wave"></i>;
            case 'Scholarships':
                return <i class="fas fa-graduation-cap"></i>;
            case 'Royalties':
                return <i class="fas fa-copyright"></i>;
            case 'Lottery Gambling Winnings':
                return <i class="fas fa-dice"></i>;
            case 'Tax Refunds':
                return <i class="fas fa-receipt"></i>;
            case 'Sale of Assets':
                return <i class="fas fa-dollar-sign"></i>;
            case 'Crowd Funding':
                return <i class="fas fa-money-check-alt"></i>;
            case 'Inheritance':
                return <i class="fas fa-file-invoice-dollar"></i>;
            case 'Other':
                return piggy;
            default:
                return '';
        }
    }

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

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{category}</h5>
                <div className="inner-content">
                    <div className="text">
                        <div className="items">
                            <p className="para">{dollar} {amount}</p>
                            <p className="para">{calender} {dateFormat(date)}</p>
                            <p className="para">{clock}{time}</p>
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
                            onClick={() => deleteItem(t_id)}
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

export default IncomeItem