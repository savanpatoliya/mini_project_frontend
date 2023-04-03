import React from 'react'

const card = [
  {
    id: 1,
    title: 'demo task 1',
    disc: 'heweds',
    status: 'BACKLOG',
    assignees: 'savan',
  },
  {
    id: 2,
    title: 'demo task 2',
    disc: 'heweds',
    status: 'SELECTED FOR DEVELOPMENT',
    assignees: 'savan',
  },
  {
    id: 3,
    title: 'demo task 3',
    disc: 'heweds',
    status: 'IN PROGRESS',
    assignees: 'savan',
  },
  {
    id: 4,
    title: 'demo task 4',
    disc: 'heweds',
    status: 'DONE',
    assignees: 'savan',
  },
]

function Carts({ board }) {
  const tempCart = card.filter((item) => item.status === board)
  console.log(tempCart)
  return (
    <>
      {tempCart.map((item) => {
        return (
          <div
            draggable
            onDragEnd={() => {}}
            onDragEnter={() => {}}
            style={{
              background: 'white',
              display: 'flex',
              flexDirection: 'column',
              padding: '10px',
              gap: '10px',
              boxShadow: '0px 10px 15px -17px #111',
              marginBottom: '15px',
            }}
          >
            <div>{item.title}</div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', gap: '5px' }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-exclamation-circle'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                  <path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z' />
                </svg>
                <div>medium</div>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                class='bi bi-person-circle'
                viewBox='0 0 16 16'
              >
                <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                <path
                  fill-rule='evenodd'
                  d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'
                />
              </svg>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Carts