import styled from "styled-components";

import Board from './components/Board';

import './App.css';

const AppUI = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(201 201 201 / 50%);
  padding: 0px 25px;
  box-sizing: border-box;
  font-size: 16px;


  @media (max-width: 600px) {
    padding: 0px;
    justify-content: normal;
    align-items: normal;
    font-size: 14px;
  }
`;

function App() {
  return <AppUI> <Board /> </AppUI>;
}

export default App;
