import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './Layouts/Header';
import Sidebar from './Layouts/Sidebar';
import { Route, Routes } from 'react-router';
import Dashboard from './Modules/Dashboard';
import Login from './Modules/Login';
import Hotels from './Modules/Highlights';
import Rooms from './Modules/Live';
import Users from './Modules/Users';
import UserEditForm from './Components/UserForms/UserEdit.form';
import CreateHotelForm from './Components/HotelForms/CreateHotel.form';
import EditHotelForm from './Components/HotelForms/EditHotel.form';
import News from './Modules/News';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='d-flex main-body-content'>
        <Sidebar />
        <main className='flex-grow-1 p-4 content-display'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={<Users />} />
            <Route path='/users/:id' element={<UserEditForm />} />
            <Route path='/highlights' element={<Hotels />} />
            <Route path='/hotels/create' element={<CreateHotelForm />} />
            <Route path='/hotels/:id/edit' element={<EditHotelForm />} />
            <Route path='/live' element={<Rooms />} />
            <Route path='/news' element={<News />} />
          </Routes>
        </main>

      </div>

    </div>
  );
}

export default App;
