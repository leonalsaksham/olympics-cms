import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axios'
import { getAllHotels } from '../../redux/actionCreator/hotelActionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'
import ConfirmationModal from '../Modals/ConfirmationModal'

function HighlightTable() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [hotelId, setHotelId] = useState<number>(0)

    const [error, setError] = useState('')

    const dispatch = useAppDispatch()

    const closeModal = () => {
        setShowModal(false)
    }

    const deleteHotel = async (hotelId: any) => {
        try {
            const response = await axiosInstance.delete(`/hotels/${hotelId}`);
            if (response.status === 200) {
                setShowModal(false)
                dispatch(getAllHotels({}));
            }
        } catch (error: any) {
            setError(error)
        }
    }

    useEffect(() => {
        dispatch(getAllHotels({}))
    }, [dispatch])

    const { hotelData, hotelLoading } = useAppSelector((state) => state.hotelsReducer)

    return (
        <div>
            <ConfirmationModal
                showModal={showModal}
                title="Delete Hotel"
                description="Are you sure you want to delete this hotel?"
                action={() => deleteHotel(hotelId)}
                closeModal={closeModal}
            />
            <Table striped bordered className='mt-4'>
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
            </Table>
        </div>
    )
}

export default HighlightTable