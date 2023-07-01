import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo-rounded.png'

function Login() {
  const navigate = useNavigate()


  const [alertShow, setAlertShow] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [errorObj, setErrorObj] = useState<any>()

  const [user, setUser] = useState<any>({
    userName: '',
    password: ''
  })

  const loginHandler = (e: any) => {
    e.preventDefault()
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    if (user.userName === '' || user.password === '') {
      setAlertShow(true);
      setErrorMsg('Please fill all the feilds')
    }
  }

  const authenticate = () => {
    localStorage.setItem("token", "etrwtreytqrwyqrweytqrweywerqyut");
    navigate("/");
  }

  const submitLogin = async (e: any) => {
    e.preventDefault();
    console.log("click");

    const payload = {
      userName: 'Admin',
      password: 'admin@123'
    }
    if(user.userName === payload.userName && user.password === payload.password) {
      authenticate();
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [submitLogin])

  return (
    <div className='auth-wrapper'>
      <Row className='g-0 w-100'>
        <Col md={6}>
          <div className="auth-vid">
            <ReactPlayer
              url='https://cdnl.iconscout.com/lottie/premium/preview-watermark/flight-booking-app-4179010-3468962.mp4'
              playing={true}
              loop={true}
              controls={false}
              className='w-100'
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="auth-form">
            <Image src={Logo} alt='Logo' className='img-fluid' />
            <h3>Login to access the CMS</h3>
            <Form onSubmit={submitLogin}>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-user"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Username"
                  type='text'
                  value={user.userName}
                  name='userName'
                  onChange={loginHandler}
                  required
                />
              </InputGroup>
              <InputGroup>
                <InputGroup.Text id="basic-addon2"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                <Form.Control
                  placeholder="Password"
                  type='password'
                  value={user.password}
                  name='password'
                  onChange={loginHandler}
                  required
                />
              </InputGroup>
              <Button type='submit' className='mt-3 d-block w-100'>Login</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Login