import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Dashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [])
  return (
    <div>
      <div className="section-head">
        <h3>Dashboard</h3>
      </div>
      <div className='dashboard-content mt-5'>
        <Row>
          <Col lg={3}>
            <div className="dashboard-card">
              <div className='text-content'>
                <h2>5200</h2>
                <p>Total Users</p>
              </div>
              <i className='fas fa-users'></i>
            </div>
          </Col>
          <Col lg={3}>
            <div className="dashboard-card">
              <div className='text-content'>
                <h2>3000</h2>
                <p>Live Watching</p>
              </div>
              <i className='fas fa-video'></i>
            </div>
          </Col>
          <Col lg={3}>
            <div className="dashboard-card">
              <div className='text-content'>
                <h2>2000</h2>
                <p>Active Users</p>
              </div>
              <i className='fas fa-users'></i>
            </div>

          </Col>
          <Col lg={3}>
            <div className="dashboard-card">
              <div className='text-content'>
                <h2>5200</h2>
                <p>Live Games</p>
              </div>
              <i className='fas fa-play'></i>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard