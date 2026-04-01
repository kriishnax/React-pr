import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='parent'>

     <div className="card">
            <div className="top">
              <img src="https://img.icons8.com/3d-fluency/1200/amazon.jpg" alt="" />
              <button>Save <Bookmark size={15}/> </button>
            </div>
            <div className="center">
              <h3>{props.com} <span>5 days ago</span></h3>
              <h2>{props.des}</h2>
              <div className='tag'>
                <h4>Part time</h4>
                <h4>Senior level</h4>
              </div>
            </div>
            <div className="bottom">
              <div>
                  <h3>$120/hr</h3>
                  <p>Mumbai, India</p>
                               
              </div>
              <button>Apply now</button>
            </div>
          </div>
    </div>
  )
}

export default Card
