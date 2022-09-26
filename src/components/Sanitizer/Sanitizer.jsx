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

import { sanitizer } from '../../Demodata';

export default function Sanitizer() {
  const Local_Storage = "cartData"
  const [cartData, setCartData] = useState(JSON.parse
      (localStorage.getItem(Local_Storage)) || [])


  const add = (id) => {
      console.log(id);

      const details = sanitizer.filter((reading) => {

          return reading.id===id

      })

      const flt = details[0];
      console.log(flt);

      setCartData([...cartData, { ...flt }])

     
  }

  useEffect(() => {
      const oldStorage =JSON.parse(localStorage.getItem(Local_Storage))
      if (oldStorage){
          setCartData(oldStorage)
      }
  }, [])


  useEffect(() =>{
      localStorage.setItem(Local_Storage, JSON.stringify(cartData))
  }, [cartData])

  return (
    <>
    <div className="container">
      <div className="row">
        {sanitizer.map((product)=>(
        <div className="col-lg-4 col-12 col-md-4 col-sm-12">
          <center>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="100%"
              image={product.productImage}
              // image="https://cdn.shopify.com/s/files/1/0039/7308/7330/products/sun-kissed-clementine-sanitizer-hand-cleansing-gel_600x.jpg?v=1630759492"
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
              <Button size="small" style={{fontSize:"large",color:"black"}}> <b>${product.price}</b> </Button>
              <Button size="small" variant='outlined' id="addcart-btn" onClick={()=>add(product.id)} >Add Cart</Button>
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
              image="https://cdn.shopify.com/s/files/1/0039/7308/7330/products/miami-nights-sanitizer-hand-cleansing-gel-with-the-goodness-of-vitamin-e-oat-kernel-extracts-_-aloe-vera-to-nourish-by-kimirica-1_450x.jpg?v=1659937053"
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
              image="https://cdn.shopify.com/s/files/1/0039/7308/7330/products/hand-cleansing-gel-collection-pack-og-five-by-kimirica-01_600x.jpg?v=1618038847"
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
