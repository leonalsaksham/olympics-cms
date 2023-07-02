import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const initialNewsData = [
  {
    title: 'Breaking News',
    description: 'This is the latest news update.'
  }
];

function NewsContent() {
  const [newsData, setNewsData] = useState(initialNewsData);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (editIndex === -1) {
      const newArticle = { title: newTitle, description: newDescription };
      setNewsData([...newsData, newArticle]);
    } else {
      const updatedNewsData = [...newsData];
      updatedNewsData[editIndex] = { title: newTitle, description: newDescription };
      setNewsData(updatedNewsData);
      setEditIndex(-1);
    }
    setNewTitle('');
    setNewDescription('');
  };

  const handleEdit = (index:number) => {
    const selectedArticle = newsData[index];
    setNewTitle(selectedArticle.title);
    setNewDescription(selectedArticle.description);
    setEditIndex(index);
  };

  return (
    <div className='mt-4'>
      <Row>
        <Col lg={8}>
          <div className='display-news'>
            {newsData.map((article, index) => (
              <div key={index} className='card mb-2'>
                <h2 className=''>{article.title}</h2>
                <p>{article.description}</p>
                <Button variant='secondary' className='edit-btn-news' onClick={() => handleEdit(index)}>
                  <i className='fas fa-pencil'></i>
                </Button>
              </div>
            ))}
          </div>
        </Col>
        <Col lg={4}>
          <div className='card'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col sm={12}>
                  <Form.Group className='mb-3'>
                    <Form.Label>News Title</Form.Label>
                    <Form.Control
                      type='text'
                      placeholder='Enter title'
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                    />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group className='mb-3'>
                    <Form.Label>News Description</Form.Label>
                    <Form.Control
                    as={'textarea'}
                      type='text'
                      placeholder='Enter description'
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button variant='primary' type='submit'>
                {editIndex === -1 ? 'Submit' : 'Update'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default NewsContent;