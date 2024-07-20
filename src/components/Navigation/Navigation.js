import React, { useState,useEffect } from 'react'
import styled from 'styled-components'
import avatar from '../../img/avatar.png'
import { signout } from '../../utils/Icons'
import { menuItems } from '../../utils/menuItems'
import Cookies from 'js-cookie'
import { useGlobalContext } from '../../context/globalContext';

function Navigation({active, setActive , history}) {
    //console.log("props",props)
    const onClickLogout = () => {

        // const {history} = this.props
    
        Cookies.remove('jwt_token')
        history.replace('/')
      }
    const {user,getUser} = useGlobalContext()
    // useEffect(() =>{
    //     console.log("reloaded")
    //     getUser()
    // }, [])
    // console.log("use",user);
    // const puser=user[0];
    // console.log("puse",puser);
    // const {name} = puser;

    useEffect(() => {
        getUser();
    }, []);

    const puser = user && user[0] ? user[0] : {};
    const { name } = puser;
    
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                <h2>{name || ' '}</h2>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li onClick = {onClickLogout}>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 1rem 0.6rem;
    width: 21%;
    height: 91vh;
   background: linear-gradient(to bottom, 
    rgb(227, 185, 178),
    rgb(216, 195, 156),
    rgb(219, 219, 162),
    rgb(195, 230, 195),
    rgb(176, 202, 227)
); 

    border: 3px solid   rgb(234, 221, 177);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0rem;
    @media (min-width: 768px) {
        padding: 2rem 1.5rem;
        gap: 0rem;
    }
    .user-con{
        height: 100px;
        display: flex;
        align-items: center;
        gap: 1rem;
        width:100%;
        margin-bottom: 10px;
        @media (min-width: 768px) {
            margin-bottom: 40px;
        }
        img{
            width: 40%;
            border-radius: 50%;
            object-fit: cover;
            background: #fcf6f9;
            border: 2px solid #FFFFFF;
            padding: .2rem;
            box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
        }
        h2{
            width: 60%;
            color:#177ea4;
            font-size: .75rem;
        }
        @media (min-width: 768px) {
        h2 {
            font-size: 1rem; // Medium screen font-size
        }
    }
        p{
            color: rgba(34, 34, 96, .6);
        }
    }

    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        li{
            width: 100%;
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: rgba(34, 34, 96, .6);
            padding-left: 0.3rem;
            position: relative;
            i{
                color: rgba(34, 34, 96, 0.6);
                font-size: 0.75rem;
                transition: all .4s ease-in-out;
            }
            @media (min-width: 768px) {
            i {
                font-size: 1.4rem; // Medium screen font-size
            }

            }
            span{
                font-size: 0.75rem;
                transition: all .4s ease-in-out;
            }
            @media (min-width: 768px) {
            span {
                font-size: 1.3rem; // Medium screen font-size
            }

            }
        }
    }
    .bottom-nav {
        cursor: pointer;
    }

    .active{
        color: rgba(34, 34, 96, 1) !important;
        i{
            color: rgba(34, 34, 96, 1) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: #222260;
            border-radius: 0 10px 10px 0;
        }
    }
`;

export default Navigation