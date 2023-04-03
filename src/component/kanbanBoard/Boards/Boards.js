import React from 'react'
import '../../../App.css'
import Carts from '../Carts/Carts'
import { useDashboradContext } from '../../../context/dashboard_context'
function Boards() {
  const { status } = useDashboradContext()



  return (
    <>
      <div
        class='container'
        style={{
          height: '650px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
        
      >
        <div class='row row-cols-1 ' style={{ marginLeft: '0px' }}>
          {/* <div
            class='col'
            style={{
              width: '25%',
              paddingLeft: '5px',
              paddingRight: '5px',
            }}
          >
            <div class='p-3 border bg-light' style={{ height: '600px' }}>
              Row column
            </div>
          </div>
          <div
            class='col'
            style={{ width: '25%', paddingLeft: '5px', paddingRight: '5px' }}
          >
            <div class='p-3 border bg-light' style={{ height: '600px' }}>
              Row column
            </div>
          </div>
          <div
            class='col'
            style={{ width: '25%', paddingLeft: '5px', paddingRight: '5px' }}
          >
            <div class='p-3 border bg-light' style={{ height: '600px' }}>
              Row column
            </div>
          </div>
          <div
            class='col'
            style={{ width: '25%', paddingLeft: '5px', paddingRight: '5px' }}
          >
            <div class='p-3 border bg-light' style={{ height: '600px' }}>
              Row column
            </div>
          </div> */}

          {status.map((board) => {
            return (
              <div
                class='col'
                style={{
                  width: '25%',
                  paddingLeft: '5px',
                  paddingRight: '5px',
                }}
              >
                <div
                  class='p-3 border bg-light'
                  style={{
                    height: '610px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '10px',
                  }}
                >
                  {board}
                  <div>
                    <Carts board={board}/>
                    
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Boards
