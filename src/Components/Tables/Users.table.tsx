import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axiosInstance from '../../api/axios';
import { getAllUsers } from '../../redux/actionCreator/userActionCreator';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import ConfirmationModal from '../Modals/ConfirmationModal';

function UsersTable() {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number>(0)

  const dispatch = useAppDispatch();

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteUser = async (userId: number) => {
    try {
      const response = await axiosInstance.delete(`/users/${userId}`);
      if (response.status === 200) {
        setShowModal(false)
        dispatch(getAllUsers({}));
      }
    } catch (error) {
      console.log(error);

    }
  }

  useEffect(() => {
    dispatch(getAllUsers({}));
  }, [dispatch])

  const { userData } = useAppSelector((state) => state.usersReducer)

  return (
    <>
      <ConfirmationModal
        showModal={showModal}
        title="Delete User"
        description="Are you sure you want to delete this user?"
        action={() => deleteUser(userId)}
        closeModal={closeModal}
      />
      <Table striped bordered className='mt-4'>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date Created</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Saksham B. Shah</td>
            <td>sak@gmail.com</td>
            <td>2022-11-22</td>
            <td>
              {/* <Link to={`/users/${user._id}`} className='btn btn-secondary me-3'>Edit</Link> */}
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-danger'>Block</Button>
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-secondary ms-2'>Restrict</Button>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>Sameen Shrestha</td>
            <td>sameen@gmail.com</td>
            <td>2022-11-22</td>
            <td>
              {/* <Link to={`/users/${user._id}`} className='btn btn-secondary me-3'>Edit</Link> */}
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-danger'>Block</Button>
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-secondary ms-2'>Restrict</Button>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>John Doe</td>
            <td>john.doe@gmail.com</td>
            <td>2022-11-22</td>
            <td>
              {/* <Link to={`/users/${user._id}`} className='btn btn-secondary me-3'>Edit</Link> */}
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-danger'>Block</Button>
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-secondary ms-2'>Restrict</Button>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Doe John</td>
            <td>doe@gmail.com</td>
            <td>2022-11-22</td>
            <td>
              {/* <Link to={`/users/${user._id}`} className='btn btn-secondary me-3'>Edit</Link> */}
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-danger'>Block</Button>
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-secondary ms-2'>Restrict</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>

  )
}

export default UsersTable