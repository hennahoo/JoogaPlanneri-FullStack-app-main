import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const about = () => {
  return (
    <div className="container">
      <h1>Tämä on YogaPlanner joogaharjoitusten suunnittelusovellus</h1>  <br></br>
      <p> - Sivusto on luotu käyttäen Next.js, Frameworkiä ja tietokantana on käytetty PostgreSQL tietokantaa.  <br></br>
          - YogaPlanner projekti on Jyväskylän Ammattikorkeakoulun kesäprojekti 2023. <br></br>
        <a href="https://yogaplanner.pages.labranet.jamk.fi/site/" target="_blank" rel="noreferrer">YogaPlanner projektin web-sivu</a>. <br></br>
          - Blogi-sivustolta löytyy lisätietoa projektin etenemisestä ja käytetyistä tekniikoista. <br></br>       
          <a href="https://yogaplannerblog.webnode.fi/" target="_blank" rel="noreferrer">YogaPlanner projektin blogi-sivu</a>. <br></br>         
          <br></br>   
                  <Image src="/logo.png" width={150} height={150} /> 
       </p>
      
    </div>
  )
}

export default about