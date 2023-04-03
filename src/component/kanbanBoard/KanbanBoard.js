import React from 'react'

import SideNavbar from '../../component/SideNavbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Boards from './Boards/Boards'
import NewCart from './newCrart/NewCart'
import { useDashboradContext } from '../../context/dashboard_context'

function KanbanBoard() {
  const { handleCloseCreateTasks, displayTaskFlag } = useDashboradContext()
  return (
    <div className='row nopadding'>
      <div
        className='col-lg-auto nopadding'
        style={{ background: '#0A3D9D', height: '100vh' }}
      >
        <ul className='nopadding'>
          <li>
            <i
              class='fa-solid  fa-magnifying-glass fa-2x mx-2 my-3'
              style={{ color: 'white' }}
            ></i>
          </li>
          <li>
            <i
              class='fa-sharp fa-regular fa-plus fa-2x mx-2 my-3'
              style={{ color: 'white' }}
            ></i>
          </li>
        </ul>
      </div>
      <div className='col-lg-2 nopadding'>
        <SideNavbar />
      </div>

      <div className='col nopadding'>
        <div style={{ height: '100vh' }}>
          <div style={{ height: '10%' }}>
            <nav class='navbar navbar-light bg-light justify-content-between h-100'>
              <form class='form-inline'>
                <input
                  class='form-control mr-sm-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                  style={{ margin: '7px' }}
                />
              </form>
              <a class='navbar-brand'>Hii ! User</a>
            </nav>
          </div>
          <div style={{ height: '10%' }}>
            <div className='d-flex justify-content-between align-items-center h-100'>
              <div>LIST PROJECT</div>
              <div>
                <button
                  type='button'
                  class='btn btn-outline-primary'
                  
                  onClick={handleCloseCreateTasks}
                >
                  Add New
                </button>
              </div>
            </div>
          </div>
          <div>
            {displayTaskFlag ? <NewCart /> : <Boards />}

            {/* <Boards /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default KanbanBoard
