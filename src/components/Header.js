import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Main>
        <h1>Note<span>Z</span></h1>
        <button className='btn prev-btn'><a 
                      href="https://nseraj11.github.io/NoteZ-Vue-App/" 
                      target="_blank" 
                      rel="noreferrel">Preview App</a></button>
        <div className='download-container'>
            <button className='btn app-btn'>Download from App Store</button>
            <button className='btn goog-btn'>Get it on Google Play</button>
        </div>
    </Main>
  )
}

const Main = styled.div`
    width:100%;
    height:250px;
    background-color:black;
    border:1px solid black;
    color:white;

    h1{
        color:#008282;

        span{
            color:#a15000;
        }
    }

    .btn{
        padding:10px;
        border-radius:5px;

        a{
            text-decoration:none;
            color:white;
        }
    }

    .prev-btn{
        position:relative;
        top:170px;
        background-color:black;
        border:none;
        color:white;
        font-weight:bold;
        font-size:20px;
    }

    .download-container{
        position:relative;
        top:160px;
        float:right;
        padding:5px;
        margin-right:5px;

        .app-btn{
            background-color:#008282;
            color:black;
            font-weight:bold;
        }

        .goog-btn{
            background-color:#a15000;
            color:black;
            font-weight:bold;
        }
    }
`;

export default Header