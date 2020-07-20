import React from 'react'
import styled from '@emotion/styled'

const ContenedroFrase = styled.div`
    padding:3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top:7rem;
    
    @media (min-width: 992px){
        margin-top:5rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left:4rem;

        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem; 
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({ frase }) => {
    if (Object.keys(frase).length === 0 ) {
        return null;
    }
    return (
        <ContenedroFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedroFrase>
    );
}
export default Frase;