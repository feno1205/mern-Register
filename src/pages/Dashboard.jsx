import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { getStudentDetailsAPI } from '../../services/allAPI'

function Dashboard() {

    const [studentDetails, setStudentDetails] = useState([])

    const getStudentDetails = async () => {
        try {
            const result = await getStudentDetailsAPI();
            if (result.status === 200) {
                setStudentDetails(result.data)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getStudentDetails()
    }, [])

    return (
        <div>
            <h1 className='text-center text-info mt-5'>Student Details</h1>
            <Table striped bordered hover className='container table-responsive m-5 text-center'>
                <thead className='bg-info text-white'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {studentDetails?.length > 0 ? (
                        studentDetails.map((students, index) =>(
                            <tr key={index}>
                                <td>{students.firstname}</td>
                                <td>{students.lastname}</td>
                                <td>{students.address}</td>
                                <td>{students.email}</td>
                                <td>{students.mobile}</td>
                                <td>{students.dob}</td>
                                <td>{students.gender}</td>
                                <td>{students.course}</td>
                            </tr>
                        ))
                    ):(
                        <h1>No data to display...</h1>
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard