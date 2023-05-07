import React from 'react'
import { useState } from 'react';
import { useDashboradContext } from '../../../context/dashboard_context'
function NewCart() {

const { handleCloseCreateTasks } = useDashboradContext();
const [taskName, setTaskName] = useState('')
const [taskStatus, setTaskStatus] = useState('')
const [taskDesc, setTaskDesc] = useState('');

const handleCreateTask = () => {}

  return (
    <>
      <div className='container w-50 my-3' style={{ height: '85%' }}>
        <div className style={{ height: '10%' }}>
          <h1>Create task</h1>
        </div>
        <div className style={{ height: '90%' }}>
          <form>
            <div className='form-group my-3'>
              <label for='TaskName'>Task Name</label>
              <input
                type='text'
                className='form-control'
                id='ProjectName'
                placeholder='Enter Your Project name eg:OpTask'
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value)
                }}
              />
            </div>

          
            <div className='form-group my-3'>
              <label for='Status'>Task Status</label>
              <input
                type='text'
                className='form-control'
                id='Category'
                placeholder="Enter Project's status eg:BACKLOG OR SELECT FOR DEVELOPMENT"
                value={taskStatus}
                onChange={(e) => {
                  setTaskStatus(e.target.value)
                }}
              />
            </div>

            <div className='form-group my-3'>
              <label for='Description'>Description</label>
              <textarea
                className='form-control'
                id='Description'
                rows='10'
                style={{ resize: 'none' }}
                value={taskDesc}
                onChange={(e) => {
                  setTaskDesc(e.target.value)
                }}
              ></textarea>
            </div>
            <div className='d-flex justify-content-between'>
              <button
                type='button'
                class='btn btn-outline-danger btn-sm'
                onClick={handleCloseCreateTasks}
              >
                Close
              </button>
              <button
                type='button'
                class='btn btn-outline-success btn-sm'
                onClick={handleCreateTask}
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewCart
