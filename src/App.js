import React,{ useState } from 'react';
import Header from './components/Header';
import EmpForm from './components/EmpForm';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import EditEmployee from './components/EditEmployee';
import './App.css';


function App() {

  const [activeMenu, setActiveMenu] = useState(true)


  // const activeMenu = true
  return (
    <>

      <div>
        <Header activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>


        <div className={activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-60  overflow-hidden'
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '}>
          <Routes>
            <Route path="/" element={<EmpForm />} />
            <Route path="/dashboard" element={<EmpForm />} />
            <Route path="/list" element={<List />} />
            <Route path="/edit/:id" element={<EditEmployee />} />

          </Routes>
        </div>


      </div>


    </>

  );
}

export default App;
