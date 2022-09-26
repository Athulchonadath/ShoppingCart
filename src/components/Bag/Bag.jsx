import React from "react";
import {CardContent,CardActions,Button,Card,Typography,CardMedia,} from "@mui/material";
import { useState, useEffect } from "react";
import { bag } from "../../Demodata";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Bag() {
  // const Local_Storage = "cartData";
  // const [cartData, setCartData] = useState(
  //   JSON.parse(localStorage.getItem(Local_Storage)) || []
  // );

  // const add = (id) => {
  //   console.log(id);

  //   const details = bag.filter((reading) => {
  //     return reading.id === id;
  //   });

  //   const flt = details[0];
  //   console.log(flt);

  //   setCartData([...cartData, { ...flt }]);
  // };

  // useEffect(() => {
  //   const oldStorage = JSON.parse(localStorage.getItem(Local_Storage));
  //   if (oldStorage) {
  //     setCartData(oldStorage);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(Local_Storage, JSON.stringify(cartData));
  // }, [cartData]);
  const Local_Storage = "cartData"
  const [cartData,setCartData]= useState(JSON.parse(localStorage.getItem (Local_Storage))||[])


 
  
const add=(id)=>{

  const bagFData = cartData.filter((readings) =>
  readings.category.includes('Bag')
 
  )
  console.log(bagFData.length);
  

  
  // console.log(id);
  if (bagFData.length > 1) {
      console.log("Bag Purchase Limit Reached");
      toast("Bag Purchase Limit Reached!")

      
  }else{
      const details = bag.filter((reading)=>{

          return reading.id===id
          
      })
      const flt =details[0];
      console.log(flt);
     
     setCartData([...cartData,{...flt}])
  }



 



}

useEffect (()=>{
  const oldStorage=JSON.parse(localStorage.getItem(Local_Storage ))
  if (oldStorage){
      setCartData(oldStorage)
  }
},[])



useEffect (()=>{

  localStorage.setItem(Local_Storage, JSON.stringify(cartData) )
},[cartData])
  



      
  


  return (
    <>
      <div className="container">
        <div className="row">
          {bag.map((bdata) => (
            <div className="col-lg-4 col-12 col-md-4 col-sm-12">
              <center>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={bdata.productImage}
                    // image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/72a02d0f1f4f43fd95afadcf00abf350_9366/waist-bag.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {/* ADIDAS */}
                      {bdata.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatum non blanditiis, dicta modi odit quisquam, ut
                      asp corrupti?
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button style={{fontSize:"large",color:"black"}} size="small" >
                     <b> ${bdata.price}</b>
                    </Button>
                    <Button variant='outlined' id="addcart-btn" size="small" onClick={() => add(bdata.id)}>
                      ADD CART
                    </Button>
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
                image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e484f9f9e68c4629a683adde014bc4d0_9366/love-unites-backpack.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ADIDAS
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
          </div> */}
          {/* <div className="col-lg-4 col-12 col-md-4 col-sm-12">
            <center><Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="100%"
                image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/078770/01/fnd/IND/fmt/png/Fruits-Kids-Gym-Bag"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  PUMA
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
        <ToastContainer>position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
               </ToastContainer>
      </div>
    </>
  );
}
