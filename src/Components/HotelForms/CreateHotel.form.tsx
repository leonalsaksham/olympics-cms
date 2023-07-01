import React, { useState } from 'react'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import axiosInstance from '../../api/axios'

function CreateHotelForm() {
    const [hotel, setHotel] = useState({
        name: '',
        type: '',
        city: '',
        address: '',
        distance: '',
        title: '',
        description: '',
        cheapestPrice: 0
    })

    const navigate = useNavigate()

    const handleChange = (e: any) => {
        setHotel({
            ...hotel,
            [e.target.name]: e.target.value
        })
        console.log(hotel);

    }

    const createHotel = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/hotels', hotel);
            if(response.status=== 200) {
                navigate('/hotels')
            }

        } catch (error) {
            console.log(error);
            
        }
    }

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
                    <Button variant="primary" type="submit" onClick={createHotel}>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default CreateHotelForm