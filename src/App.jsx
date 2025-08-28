import React from 'react'
import Home from './components/Home'


const App = () => {


  const data = [
    {
      "id": 1,
      "name": "Card One",
      "description": "This is a short description for card one."
    },
    {
      "id": 2,
      "name": "Card Two",
      "description": "This is a short description for card two."
    },
    {
      "id": 3,
      "name": "Card Three",
      "description": "This is a short description for card three."
    },
    {
      "id": 4,
      "name": "Card Four",
      "description": "This is a short description for card four."
    },
    {
      "id": 5,
      "name": "Card Five",
      "description": "This is a short description for card five."
    },
    // {
    //   "id": 6,
    //   "name": "Card Six",
    //   "description": "This is a short description for card six."
    // },
    // {
    //   "id": 7,
    //   "name": "Card Seven",
    //   "description": "This is a short description for card seven."
    // },
    // {
    //   "id": 8,
    //   "name": "Card Eight",
    //   "description": "This is a short description for card eight."
    // },
    // {
    //   "id": 9,
    //   "name": "Card Nine",
    //   "description": "This is a short description for card nine."
    // },
    // {
    //   "id": 10,
    //   "name": "Card Ten",
    //   "description": "This is a short description for card ten."
    // }
  ]

  const backgrounds = [
    "#FF7E5F",
    "#4F46E5",
    "linear-gradient(to right, #43CEA2, #185A9D)",
    "#FACC15",
    "#10B981",
  ];


  return (
    <div className='mt-20'>
      <h1 className='text-center my-5 text-2xl'>Dynamic cards added differents bg-colors</h1>
      <div className='flex items-center justify-center gap-6 flex-wrap'>
        {data.map((item) => (
          <div key={item.id} style={{ background: backgrounds[item.id % backgrounds.length] }} className='p-4 shadow-sm text-white'>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        ))}

      </div>
      <Home />
    </div>
  )
}

export default App