import React, { useState } from 'react'
import styled from 'styled-components'
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function Form() {
    const { addIncome, error, setError } = useGlobalContext()
    const [inputState, setInputState] = useState({
        type: 'income',
        amount: '',
        category: '',
        description: '',
    })

    const { type, amount, category, description } = inputState;

    const handleInput = name => e => {
        setInputState({ ...inputState, [name]: e.target.value })
        setError('')
    }

    const [showSubmitError, setShowSubmitError] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        if (!inputState.amount || !inputState.category) {
            setShowSubmitError(true)
            return
        }
        else
        setShowSubmitError(false)
        addIncome(e, inputState)
        setInputState({
            type: 'income',
            amount: '',
            category: '',
            description: '',
        })
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            {error && <p className='error'>{error}</p>}
            <div className="input-control">
                <input value={amount}
                    type="text"
                    name={'amount'}
                    placeholder={'Amount'}
                    onChange={handleInput('amount')}
                />
            </div>
            <div className="selects input-control">
                <select value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value="" disabled>Select Option</option>
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

            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" rows="2" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
                <Button
                    name={'Add Income'}
                    icon={plus}
                    bPad={'.8rem 1.6rem'}
                    bRad={'30px'}
                    bg={'var(--color-accent'}
                    color={'#fff'}
                />
            </div>
            {showSubmitError && <p className="error-message">*All Fields are required.</p>}
        </FormStyled>
    )
}


const FormStyled = styled.form`
 .error-message {
    align-self: start;
    font-size: 12px;
    margin-top: 3px;
    margin-bottom: 0px;
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 16px;
    color: #ff0b37;
  }
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;
    padding:1rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input,textarea,select{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-start;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Form