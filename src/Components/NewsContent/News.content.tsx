import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import axiosInstance from '../../api/axios';
import { getAllRooms } from '../../redux/actionCreator/roomActionCreator';
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks';
import ConfirmationModal from '../Modals/ConfirmationModal';

function NewsContent() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [roomId, setroomId] = useState<number>(0)

  const [error, setError] = useState('')

  const dispatch = useAppDispatch()

  const closeModal = () => {
    setShowModal(false)
  }

  const deleteHotel = async (roomId: any) => {
    try {
      const response = await axiosInstance.delete(`/rooms/${roomId}`);
      if (response.status === 200) {
        setShowModal(false)
        dispatch(getAllRooms({}));
      }
    } catch (error: any) {
      setError(error)
    }
  }

  useEffect(() => {
    dispatch(getAllRooms({}))
  }, [dispatch])

  const { roomData, roomLoading } = useAppSelector((state) => state.roomsReducer)
  return (
    <div>
      <ConfirmationModal
        showModal={showModal}
        title="Delete Hotel"
        description="Are you sure you want to delete this hotel?"
        action={() => deleteHotel(roomId)}
        closeModal={closeModal}
      />
      {/* <Table striped bordered className='mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Game</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Japan V Canada</td>
            <td>
              <Button onClick={() => {
                setShowModal(true);
                // setUserId(user._id)
              }} className='btn btn-primary ms-2'>Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table> */}
    </div>
  )
}

export default NewsContent