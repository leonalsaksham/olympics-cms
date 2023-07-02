import moment from 'moment';
import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import ConfirmationModal from '../Modals/ConfirmationModal';

function UsersTable() {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [userId, setUserId] = useState<number>(0)
  const [blockedUsers, setBlockedUsers] = useState<number[]>([]);
  const [restrictedUsers, setRestrictedUsers] = useState<number[]>([]);
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: 'Saksham B. Shah',
      email: 'sak@gmail.com',
      dateCreated: '2022-11-22',
      status: 'open',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john@gmail.com',
      dateCreated: '2022-11-22',
      status: 'open',
    },
    {
      id: 3,
      name: 'Ashley Wells',
      email: 'ash@gmail.com',
      dateCreated: '2022-11-22',
      status: 'open',
    },
    {
      id: 4,
      name: 'Sandeep Risal',
      email: 'sandeep@gmail.com',
      dateCreated: '2022-11-22',
      status: 'open',
    },
    {
      id: 5,
      name: 'Logal Paul',
      email: 'lp@gmail.com',
      dateCreated: '2022-11-22',
      status: 'open',
    },
  ]);
  const closeModal = () => {
    setShowModal(false)
  }

  const deleteUser = (userId: number) => {
    // Implement your delete logic here
    setShowModal(false);
    setTableData(prevState => prevState.filter(user => user.id !== userId));
  };

  const blockUser = (userId: number) => {
    setBlockedUsers(prevState => [...prevState, userId]);
    setRestrictedUsers(prevState => prevState.filter(id => id !== userId));
  };

  const unblockUser = (userId: number) => {
    setBlockedUsers(prevState => prevState.filter(id => id !== userId));
  };

  const restrictUser = (userId: number) => {
    setRestrictedUsers(prevState => [...prevState, userId]);
    setBlockedUsers(prevState => prevState.filter(id => id !== userId));
  };

  const unrestrictUser = (userId: number) => {
    setRestrictedUsers(prevState => prevState.filter(id => id !== userId));
  };

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
            <th style={{width: 200}}>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {tableData.map(user => (
            <tr key={user.id}>
              <td>{user.id}.</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.dateCreated}</td>
              <td>
                {blockedUsers.includes(user.id) ? (
                  <span className="status blocked">Blocked</span>
                ) : restrictedUsers.includes(user.id) ? (
                  <span className="status restrict">Restricted</span>
                ) : (
                  <span>Open</span>
                )}
              </td>
              <td>
                {blockedUsers.includes(user.id) ? (
                  <>
                    <Button onClick={() => unblockUser(user.id)} className="btn btn-secondary me-3">
                      Unblock
                    </Button>
                    <Button onClick={() => restrictUser(user.id)} className="btn btn-secondary ms-2">
                      Restrict
                    </Button>
                  </>
                ) : restrictedUsers.includes(user.id) ? (
                  <>
                    <Button onClick={() => blockUser(user.id)} className="btn btn-danger">
                      Block
                    </Button>
                    <Button onClick={() => unrestrictUser(user.id)} className="btn btn-secondary ms-2">
                      Unrestrict
                    </Button>
                  </>
                ) : (
                  <>
                    <Button onClick={() => blockUser(user.id)} className="btn btn-danger">
                      Block
                    </Button>
                    <Button onClick={() => restrictUser(user.id)} className="btn btn-secondary ms-2">
                      Restrict
                    </Button>
                  </>
                )}
                <Button
                  onClick={() => {
                    setShowModal(true);
                    setUserId(user.id);
                  }}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default UsersTable