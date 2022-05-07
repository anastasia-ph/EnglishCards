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




function App() {
  const [button, setButton] = useState();

  const handleClick = (button) => {
      setButton(button);
  };

  const [page, setPage] = useState("table")
  const handleClickPage = (event) => {
    setPage(event.target.dataset.name)
    console.log(page)
  }
  return (
    <div className='App'>
    <Header>
      <p data-name="table" className="header-font header__menu-block" onClick={handleClickPage}>Таблица слов</p>
      <p data-name="card" className="header-font header__menu-block" onClick={handleClickPage}>Карточки</p>
    </Header>

    {page === "table" ?  
    <React.Fragment><TableContainerPage>
      <Table>
      <TableData Header word="Word" key="header" transcript="Transcript" translation="Translation" category="Category"></TableData>
      {data.map((item)=>
      <TableData word={item.word} key={item.word} transcript={item.transcript} translation={item.translate} category={item.category} 
      isSelected={item.word === button} onClick={handleClick}></TableData>)}
    </Table>

    </TableContainerPage>
    <PaginationContainer>
      <Pagination></Pagination>
      </PaginationContainer> 
      </React.Fragment>: 
    <React.Fragment><CardContainer>
    <Card word={data[0].word} transcript={data[0].transcript} translation={data[0].translate} category={data[0].category}></Card>
    </CardContainer>
    <PaginationContainer>
      <Pagination></Pagination>
      </PaginationContainer>
    </React.Fragment>}
   

    
    <Footer></Footer>
    </div>
  );
}

export default App;
