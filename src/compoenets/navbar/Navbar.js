
import React from 'react'
import './nvb.css'
import { Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap';
import Rating from '../Rating/Rating';
//import Rating from './compoenets/Rating/Rating' ;
const Navbar = ({setRatingSearch ,ratingSearch , name , setName}) => {
  return (
    <div className="nvb"  style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>

      <nav class="navbar navbar-dark bg-dark" style={{display:"flex", justifyContent:"space-around" , width:"100%"}} >
        <div class="container" >

          <div className="nvb1" >
            <a class="navbar-brand" href="#" style={{ color: "red" }}>TunFlix</a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#">Home</a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#"></a>
            <a class="navbar-brand" href="#">Favoris</a>
            <a class="navbar-brand" href="#">Movies</a>
            <a class="navbar-brand" href="#">Series</a>
          </div>

          <div className="nvb2">
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2"  value={name} onChange={(e)=>setName(e.target.value)}/>
             <Rating rate={ratingSearch} setRate={setRatingSearch} />
            
            </Form>
          </div>

        </div>
      </nav>




    </div>

  )
}

export default Navbar
