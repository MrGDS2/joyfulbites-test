import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import AutoFitImage from 'react-image-autofit-frame';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCcPaypal } from 'react-icons/fa';
import LikeButton from '../LikeButton/LikeButton';
import './ItemPurchase.scss';
import OrderModule from '../OrderModule/OrderModule';


const ItemPurchase = () => {

  let history = useHistory();

    return (
        <React.Fragment>
 <div className="container">
            <div className="row mt-5 pb-5">
              <div className="col-md-6 ">
              <AutoFitImage frameWidth="600px" frameHeight="600px" imgSrc={history.location.state.img} alt="main-img"/>
              </div>
              <div className="col-md-6">
               <div className="container item-info  ml-5 mt-5 text-center">
                   <div className="row mb-5 ">
                       <div className="col-md-12">
                         <h1 className="mt-5 item-title">JOYFLO BITES ™ {history.location.state.name}  </h1>
                         <LikeButton name={history.location.state.name}/>
                           </div> 
                       </div>
                       <h3 className="mt-5 mb-3 item-title">Ingredients:</h3>
                       <div className="row mb-5">
                       
                      <div className="col-md-12 item-ingredients">
                         <ol>{history.location.state.ingredients}</ol>
                          </div> 
                      </div>
            
                         <div className="row mt-5 ">
                               <div className="col-md-12 mb-5">
                           {/* <button className="order-btn">Order Today</button> */}
                           <OrderModule price={history.location.state.price}/>
                               </div>
                               </div>
               </div>
              </div>
            </div>

          </div>
          
        </React.Fragment>
        )

}

export default ItemPurchase;