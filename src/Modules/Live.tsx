import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import RoomsTable from '../Components/Tables/Live.table';
import LiveTable from '../Components/Tables/Live.table';

function Rooms() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])
  return (
    <div>
      <div className="section-head">
        <h3>Live</h3>
        <Link to='/' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>

      <LiveTable />
    </div>
  )
}

export default Rooms