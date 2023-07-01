import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../Components/Loader/Loader'
import HotelsTable from '../Components/Tables/Highlights.table'
import HighlightTable from '../Components/Tables/Highlights.table'

function Hotels() {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])


  return (
    <div>
      <div className="section-head">
        <h3>Highlights</h3>
        <Link to='/hotels/create' className='btn btn-primary'><i className="fa-solid fa-plus ms-2"></i> Add New</Link>
      </div>
      {
        loading ?
          <div className='h-100 d-flex align-items-center justify-content-center'>
            <Loader />
          </div> :
            <HighlightTable />
          }
    </div>
  )
}

export default Hotels