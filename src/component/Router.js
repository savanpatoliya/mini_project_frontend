import { createBrowserRouter } from 'react-router-dom'
import SignIn from './signIn/SignIn'
import Registration from './registration/Registration'
import Navbar from './Navbar'
import Main from '../pages/Main'
import Dashboard from '../pages/dashboard/Dashboard'
import KanbanBoard from './kanbanBoard/KanbanBoard'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <section className='vh-100'>
          <div className='h-100'>
            <Navbar />
            <SignIn />
          </div>
        </section>
      </>
    ),
  },
  {
    path: '/register',
    element: (
      <>
        <section className='vh-100'>
          <Navbar />
          <Registration />
        </section>
      </>
    ),
  },
  {
    path: '/main',
    element: <Main />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/kanbanboard',
    element: <KanbanBoard />,
  },
])

export default router
