import React from 'react'
import {
    CardContent,
    CardActions,
    Button,
    Card,
    Typography,
    CardMedia,
  } from "@mui/material";
  import { useState,useEffect } from "react";
import { book } from '../../Demodata';
import "./Note.css"
import LocalMallIcon from '@mui/icons-material/LocalMall';
export default function Notebook() {

  const Local_Storage = "cartData"
    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem(Local_Storage)) || [])
    const add = (id) => {
        console.log(id);
        const details = book.filter((reading) => {
            return reading.id === id
        })
        const flt = details[0];
        console.log(flt);
        setCartData([...cartData, { ...flt }])
    }
    useEffect(() => {
        const oldStorage = JSON.parse(localStorage.getItem(Local_Storage))
        if (oldStorage) {
            setCartData(oldStorage)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(Local_Storage, JSON.stringify(cartData))
    }, [cartData])

 return (
    <>
    <div className="container">
      <div className="row">
        {book.map((product)=>(
        <div className="col-lg-4 col-12 col-md-4 col-sm-12">
          <center>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image={product.productImage}
              // image="https://cdn.shopify.com/s/files/1/2131/2399/products/Tiffany-Exhibition_B_360x.jpg?v=1661436045"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {/* Lizard */}
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.desc}
                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non blanditiis, dicta modi odit quisquam, ut asp corrupti? */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><b style={{fontSize:"large",color:"black"}}>${product.price}</b></Button>
              <Button variant='outlined' id="addcart-btn" size="small" onClick={()=>add(product.id)}>ADD CArt</Button>
            </CardActions>
          </Card>
          </center>
        </div>
        ))}
        {/* <div className="col-lg-4 col-12 col-md-4 col-sm-12">
          <center>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image="https://cdn.shopify.com/s/files/1/2131/2399/products/3D_DIORBYJG_71bb3a9d-ec09-4613-a97b-b032f25e0062_360x.jpg?v=1644869917"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non blanditiis, dicta modi odit quisquam, ut asp corrupti?

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          </center>
        </div>
        <div className="col-lg-4 col-12 col-md-4 col-sm-12">
          <center><Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image="https://cdn.shopify.com/s/files/1/2131/2399/products/RIVAClamshell_B_360x.jpg?v=1656533186"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non blanditiis, dicta modi odit quisquam, ut asp corrupti?

              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card></center>
        </div> */}
      </div>
    </div>
  </>
  )
}
