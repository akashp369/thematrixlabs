import React from 'react'
import '../styles/SearchCom.css'
import Vector1 from '../asset/Vector1.png'

const SearchCom = ({onChange, onClick, val}) => {
  return (
    <div className='search_comp'>
        <div className="searchleft">
            <input type="text" placeholder='Search' value={val} onChange={e=>onChange(e.target.value)} />
            <button className="search_btn" onClick={onClick}><img src={Vector1} alt="" /></button>
        </div>
        <div className="searchright">
            <button>Connect</button>
        </div>
    </div>
  )
}

export default SearchCom
