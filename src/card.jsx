import React from 'react'
import { Camera } from 'lucide-react'
import { Bird } from 'lucide-react'
import { Bookmark } from 'lucide-react'
const card = ({info}) => {
  console.log(info);
  return (
    <div className="card">
        <div className="top">
          <img src="https://images.unsplash.com/photo-1488866022504-f2584929ca5f?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" id='banner' />
        </div>
            <img src={info.pfp} alt="" id='pfp' />
        <div className="middle">
          <h2>{info.name}</h2>
          <h5>{info.adress}</h5>
          <h4>{info.role}</h4>
          <p>{info.about}</p>
        </div>
        <div className="bottom">
          <button type='submit'><Camera /></button>
          <button type='submit'><Bird /></button>
          <button type='submit'><Bookmark /></button>
        </div>
    </div>
  )
}

export default card