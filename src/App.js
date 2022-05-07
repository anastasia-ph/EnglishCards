import "./App.scss"
// import "./styles/header.scss"
// import "./styles/header.scss"
// import "./styles/fonts.scss"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Table from "./components/Table"
import TableContainerPage from "./components/TableContainerPage"
import TableData from "./components/TableData"
import CardContainer from './components/CardsContainer';
import Card from './components/Card'
import React, { useState } from 'react';
import data from "./data.json"
import Pagination from "./components/Pagination"
import PaginationContainer from "./components/PaginationContainer"
import { act } from "react-dom/test-utils"




function App() {
  const [button, setButton] = useState();

  const handleClick = (button) => {
      setButton(button);
  };
  return (
    <div className='App'>
    <Header>
      <p className="header-font header__menu-block">Таблица слов</p>
      <p className="header-font header__menu-block">Карточки</p>
    </Header>
    <TableContainerPage>
      <Table>
      <TableData Header word="Word" transcript="Transcript" translation="Translation" category="Category"></TableData>
      {data.map((item)=>
      <TableData word={item.word} transcript={item.transcript} translation={item.translate} category={item.category} 
      isSelected={item.word === button} onClick={handleClick}></TableData>)}
    </Table>

    </TableContainerPage>
    <PaginationContainer>
      <Pagination></Pagination>
      </PaginationContainer>

    {/* <CardContainer>
    <Card word={data[0].word} transcript={data[0].transcript} translation={data[0].translate} category={data[0].category}></Card>
    </CardContainer>
    <PaginationContainer>
      <Pagination></Pagination>
      </PaginationContainer> */}
    
    <Footer></Footer>
    </div>
  );
}

export default App;
