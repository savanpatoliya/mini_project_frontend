import React from 'react'
import { useDashboradContext } from '../context/dashboard_context'
import './SideNavbar.css'
import { Link } from 'react-router-dom'
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import "bootstrap/dist/js/bootstrap.bundle.min.js";

const SideNavbar = () => {
  const { handleCloseCreateProject, handleProjectManager } =
    useDashboradContext()
  return (
    <div className='row nopadding'>
      <div className='sidebar col-auto col-lg-2'>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <a href='#'>
              <Link to='/kanbanboard'>
                <i className='fas fa-envelope'></i>Kanban Board
              </Link> 
            </a>
          </li>
          <li>
            <a href='#' onClick={handleProjectManager}>
              <Link to='/dashboard'>
                <i className='fas fa-gear'></i>Project Manager
              </Link>
            </a>
          </li>
          <li>
            <a href='#' onClick={handleCloseCreateProject}>
              <i className='fas fa-circle-plus'></i>Create Project
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-project-diagram'></i>portfolio
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-blog'></i>Blogs
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-address-book'></i>Contact
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='fas fa-map-pin'></i>Map
            </a>
          </li>
        </ul>
        {/* <div className="social_media">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default SideNavbar
