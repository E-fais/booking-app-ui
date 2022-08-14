import React,{Fragment, useState}  from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import HotelDetails from './Components/HotelDetails/HotelDetails'
import { HotelContext } from './context/HotelContext'
import UserInfo from './Components/user/UserInfo'
import Footer from './Components/Footer'




function App() {
  const [hotels, setHotels] = useState([]);
  const [date, setDate] = useState([null, null]);
  const[amount,setAmount]=useState()
  return (
    <HotelContext.Provider value={{hotels,setHotels,date,setDate}}>
    <Fragment>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='hotelDetails/:id' element={<HotelDetails/>}/>
    <Route path='/userInfo' element={<UserInfo />}/>
   </Routes>
   <Footer/>
   </Fragment>
    </HotelContext.Provider>
  )
}

export default App