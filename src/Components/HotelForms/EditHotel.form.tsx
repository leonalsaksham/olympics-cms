import React, { useEffect, useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router'
import axiosInstance from '../../api/axios'
import { getHotelById } from '../../redux/actionCreator/hotelActionCreator'
import { useAppDispatch, useAppSelector } from '../../redux/reduxHooks'

function EditHotelForm() {

    const dispatch = useAppDispatch();

    const {hotelDataById } = useAppSelector((state) => state.hotelsReducer)

    const [hotel, setHotel] = useState({
        name: hotelDataById?.name,
        type: hotelDataById?.type,
        city: hotelDataById?.city,
        address: hotelDataById?.address,
        distance: hotelDataById?.distance,
        title: hotelDataById?.title,
        description: hotelDataById?.description,
        cheapestPrice: hotelDataById?.cheapestPrice
    })    

    const navigate = useNavigate();

    const { id } = useParams()    

    const handleChange = (e: any) => {
        setHotel({
            ...hotel,
            [e.target.name]: e.target.value
        })
        console.log(hotel);

    }

    const editHotel = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/hotels/${id}`, hotel);
            if(response.status=== 200) {
                navigate('/hotels')
            }

        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(() => {
        dispatch(getHotelById({id}));
      }, [dispatch,hotel, hotelDataById?.name,hotelDataById?.type])

    return (
        <>
            <div className="section-head mb-4">
                <h3>Hotels / Create</h3>
            </div>
            <div className='card'>
                <Form>
                    <Row>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hotel Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Hotel Name'
                                    name='name'
                                    value={hotel.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hotel Type</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Eg: Hotel, Apartment etc'
                                    name='type'
                                    value={hotel.type}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='City Name'
                                    name='city'
                                    value={hotel.city}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Adress / Street'
                                    name='address'
                                    value={hotel.address}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Distance</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Distance in km'
                                    name='distance'
                                    value={hotel.distance}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hotel Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Specialized title'
                                    name='title'
                                    value={hotel.title}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Hotel Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder='Describe your hotel'
                                    name='description'
                                    value={hotel.description}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Cheapest Price</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        placeholder='Cheapest Price'
                                        name='cheapestPrice'
                                        value={hotel.cheapestPrice}
                                        onChange={handleChange}
                                    />
                                </InputGroup>

                            </Form.Group>

                        </Col>
                    </Row>
                    <Button variant="primary" type="submit" onClick={editHotel}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default EditHotelForm