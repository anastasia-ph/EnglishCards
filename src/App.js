import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Table from "./components/Table"
import TableContainerPage from "./components/TableContainerPage"
import React from 'react';




function App() {
  return (
    <div className='App'>
    <Header></Header>
    <TableContainerPage>
    </TableContainerPage>
    <Footer></Footer>
    </div>
  );
}

export default App;
