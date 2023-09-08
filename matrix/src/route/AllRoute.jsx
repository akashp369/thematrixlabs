import React from 'react'
import {Route, Routes} from 'react-router-dom'
import TokenComp from '../component/TokenComp'
import PairComp from '../component/PairComp'

const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<TokenComp />} />
        <Route path='/pair' element={<PairComp />} />
    </Routes>
    
  )
}

export default AllRoute
