import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.h1`
    margin: 20px auto;
    font-weight: 500;
    letter-spacing: 2px;
    color: #fcfcfc;
`;

export const Input = styled.input`
    text-align: center;
    padding: 8px 0;
    min-width: 300px;
    position: relative;

    border-image-slice: 1;
    border-width: 3px;
    border-image-source: linear-gradient(to right, CadetBlue, Coral, DarkSeaGreen);

    
    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #111;
    }
`;

export const Ul = styled.ul`
    list-style-type: none;
    letter-spacing: 1px;
    min-width: 300px;
    box-shadow: 0px 0px 2px #111;

    & > Input {
        position: relative;
        top: 0;
        left: 0;        
    }
`;


export const Li = styled.li`
    background-color: #444;
    color: #fcfcfc;
    padding: 10px 15px;

    &:hover, &:focus {
        /* outline: none; */
        background-color: #333;
        box-shadow: 0px 0px 2px #111;
    }
    
    &:before {
        content: "   ";
        white-space: pre;
        left: 10px;
        background: ${props => props.background};
    }
`;

export const Span = styled.span`
    width: 10px;
    height: 10px;
    margin-right: 10px;
`;

export const BoldMatch = styled.span`
    width: 10px;
    height: 10px;
    margin: 0 0 0 10px;
    font-weight: bold;
`;
