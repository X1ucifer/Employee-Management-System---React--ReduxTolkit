import React from 'react';
import Header from './components/Header';
import EmpForm from './components/EmpForm';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import EditEmployee from './components/EditEmployee';

function App() {
  return (
    <>

      <div>
        <Header />



        <Routes>
          <Route path="/" element={<EmpForm />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<EditEmployee />} />

        </Routes>
      </div>


    </>

  );
}

export default App;
