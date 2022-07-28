import styled from 'styled-components';


const Items = styled.li`
    display: flex;
    justify-content: space-between;
`;

const Style = styled.div`
  display: flex;
`;

const Button = styled.button`
width: max-content;
height: max-content;
margin:  16px 0 16px 16px;
cursor: pointer;
    border-radius: 4px;
    border: 1px solid  rgb(150, 150, 141);
    color: #000;
    background-color: rgb(245, 248, 40);
  &:hover,
  &:focus {
    background-color: rgb(255, 0, 0);
  }
`;

export { Items,  Button, Style };
