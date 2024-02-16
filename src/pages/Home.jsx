import React from 'react'
import { Col, Row } from 'react-bootstrap'
import homeIMG from '../assets/homeIMG.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Row className='p-5 mt-5'>
            <Col lg={6} className='p-5'>
                <h1 className='text-center p-5 fs-larger'>Education</h1>
                <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quis. Aperiam recusandae fuga fugiat, numquam pariatur eligendi aut necessitatibus perspiciatis aliquid blanditiis, laboriosam iure odio reprehenderit voluptatem dignissimos assumenda vel.</p>
                <h6 className='px-5 m-5'>New Student? Click here to <Link to={'/register'}><button className='btn btn-info'>Register</button></Link></h6>
                
            </Col>
            <Col lg={6}>
                <img style={{height:'400px'}}  src={homeIMG} alt="" />
            </Col>
        </Row>
    </div>
  )
}

export default Home