import React, { useState } from 'react'
import "./Payment.css"
import Button from './Button'
import { PayContext } from "../context/PayContext"
import { useContext } from "react";

function Payment() {
    const [show,setshow]=useState(true)
    const [show1,setshow1]=useState(true)
    const {cart}=useContext(PayContext);

  return (
    <div>
       <div className="checkoutcontainer_at">
      <div className="paymentmode_at">
        <div className="paymentspan_at"><h3>Payment Method</h3></div>

        <div className="selectmethod_at">
          <div>
           
            <input
              type="checkbox"
              value="Cash On Delivery"
              name="radio"
              className="cod_at"
               onClick={()=>{
                setshow(!show)
              }}
            />
            <div>Debit Card</div>
          </div >
          {show?null:<Button></Button>}
        </div>

        <div className="selectmethod_at">
          <div>
            <input
              type="checkbox"
              value="Cash On Delivery"
              name="radio"
              className="deb_at"
              onClick={()=>{
                setshow1(!show1)
              }}
            />
            <div>Credit Card</div>
          </div>
          {show1?null:<Button></Button>}
        </div>
      </div>

      <div className="summary">
        <div className="Ordersummary">
          <div className="ordersummaryheading"><h3>Order Summary</h3></div>
          <div className="cartsubtotal">
            <span>Subtotal: 1399  </span>
            <span className="paymentsubtotal_at">&#8377;</span>
          </div>
          <div className="cartsubtotal">
            <span>Shipping:   </span>
            <span>&#8377;{40}</span>
          </div>
          <div className="cartsubtotal">
            <span>GST</span>
            <span className="paymentgst_at">&#8377;399</span>
          </div>
          <div className="cartsubtotal">
            <span>Order Total Incl. GST:  </span>
            <span className="paymentincl_at">&#8377; {cart+40}</span>
          </div>
          <div className="cartsubtotal">
            <span>Order Total Excl. GST</span>
            <span className="paymentexcl_at">&#8377;{cart+40}</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Payment
