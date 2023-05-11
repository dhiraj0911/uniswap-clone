import React, {useState, useEffect} from 'react'
import Image from "next/image";

import Style from './Token.module.css';
import images from '../../assets';
import {Toggle} from "../index";

function Token({setOpenSetting}) {
  return (
    <div className={Style.Token}>
        <div className={Style.Token_box_heading}>
            <h4>Setting</h4>
            <Image src={images.close}
                alt="close"
                width={50}
                height={50}
                onClick={() => setOpenSetting(false)} 
            />     
        </div>
        <p className={Style.Token_box_para}>
            Slippage Tolerance{""}
            <Image src={images.lock} 
                alt="lock"
                width={20}
                height={20}
            />
        </p>
        <div className={Style.Token_box_input}>
            <button>Auto</button>
            <input type="text" placeholder="0.1%"/>
        </div>
        <p className={Style.Token_box_para}>
            Slippage Tolerance{""}
            <Image src={images.lock} 
                alt="lock"
                width={20}
                height={20}
            />
        </p>
        <div className={Style.Token_box_input}>
            <button>minutes</button>
            <input type="text" placeholder="0.1%"/>
        </div>
        <h2>Interface Setting</h2>
        <div className={Style.Token_box_toggle}>
            <p className={Style.Token_box_para}>
                Transaction Deadline
                <Toggle label="No"/>
            </p>
        </div>
    </div>
  )
}

export default Token