import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router';
import axiosInstance from '../../api/axios';
import { getUserById } from '../../redux/actionCreator/userActionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'

function UserEditForm() {

  const [username, setUsername] = useState<string>('')

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams()

  const { userDataById } = useAppSelector((state) => state.usersReducer)

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    const payload = {
      userName: username
    }
    try {
      const response = await axiosInstance.put(`/users/${id}`, payload);
      if(response.status === 200) {
        navigate('/users')
      }
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    dispatch(getUserById({ id }))
    setUsername(userDataById?.userName)
  }, [dispatch, userDataById?.userName])

  return (
    <>
      <div className="section-head mb-4">
        <h3>Users / Edit</h3>
      </div>
      <div className='card'>
        <Form>
          <Row>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={userDataById?.email} disabled />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    </>

  )
}

export default UserEditForm