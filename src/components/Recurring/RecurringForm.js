import React, { useState,useRef } from 'react'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';


function RecurringForm() {
    const {addRecurring, error, setError} = useGlobalContext()
    const [inputState, setInputState] = useState({
        date: '',
        amount: '',
        category: '',
        description: '',
    })

    const {date, amount, category,description } = inputState;

    const handleInput = name => e => {
        setInputState({...inputState, [name]: e.target.value})
        setError('')
    }

    const [showSubmitError, setShowSubmitError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        if (!inputState.amount || !inputState.category || !inputState.date) {
            setShowSubmitError(true)
            return
        }
        else
        setShowSubmitError(false)
        addRecurring(e,inputState)
        setInputState({
            date: '',
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
            <div className="input-control">
                <DatePicker
                    id='date'
                    placeholderText='Enter A Date'
                    selected={date}
                    dateFormat="dd/MM/yyyy"
                    onChange={(date) => {
                        setInputState({...inputState, date: date})
                    }}
                />
            </div>
            <div className="selects input-control">
                <select value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""  disabled >Select Option</option>
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

            <div className="input-control">
                <textarea name="description" value={description} placeholder='Add A Reference' id="description" cols="30" rows="4" onChange={handleInput('description')}></textarea>
            </div>

            <div className="submit-btn">
                <Button 
                    name={'Add Recurring'}
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
    display: flex;
    flex-direction: column;
    padding:1rem;
    width: 100%;
    gap: 2rem;
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
export default RecurringForm