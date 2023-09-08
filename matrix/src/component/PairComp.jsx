import React, { useEffect, useState } from 'react'
import SearchCom from '../pages/SearchCom'
import DetailComp from './DetailComp'

const PairComp = () => {
  const [token, setToken]=useState("")
  const [data, setData]=useState([])
  const handlechange=(value)=>{
    setToken(value)
  }
  const handlesub=()=>{
    if(token == "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"){
      fetchData();
    }else{
      setData([])
    }
    setToken("")
  }
  const fetchData=()=>{
    fetch(`https://api.dexscreener.com/latest/dex/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8`)
    .then(res=>res.json())
    .then(data=>setData(data.pairs))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    setData([])
  },[])
  return (
    <div style={{height:"80vh", overflow:"auto"}}>
    <SearchCom  onChange={handlechange} onClick={handlesub} val={token}/>
    {
      data.length>0?
      (<div className='token'>
      <h5>Token Search Result</h5>
      <div className="tokenbox">
        {
          data.map(item=><DetailComp data={item} />)
        }
      </div>
    </div>):
    (<h3 style={{display:"block", marginTop:"2rem" ,color:"#631158", backgroundColor:"white", fontSize:"1rem"}}>Search Token is <br/> 0x2170Ed0880ac9A755fd29B2688956BD959F933F8</h3>)
    }
  </div>
  )
}

export default PairComp
