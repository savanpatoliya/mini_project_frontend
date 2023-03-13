import React from 'react'
import { useDashboradContext } from '../../context/dashboard_context'

const CreateProjectDashboard = () => {
    const {handleCreateProject} = useDashboradContext();
  return (
    <div>Create Project Dashboard
        <div className="">
            <button onClick={handleCreateProject}>close</button>
        </div>
    </div>
  )
}

export default CreateProjectDashboard