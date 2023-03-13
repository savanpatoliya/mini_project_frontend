import React from 'react'
import { useDashboradContext } from '../../context/dashboard_context'

const CreateMemberDashboard = () => {
    const {handleCreateMember} = useDashboradContext();
  return (
    <div>create Member dashboard
        <div className="">
            <button onClick={handleCreateMember}>close</button>
        </div>
    </div>
  )
}

export default CreateMemberDashboard