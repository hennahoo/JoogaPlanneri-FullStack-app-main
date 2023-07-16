//'use client';

import Image from 'next/image'
{/* tähän täytyy kokeilla importoida se javascript palikka millä saa tehtyä .pdf tiedoston..  taulukko -> .pdf:ksi testin vuoksi.  
    https://www.reddit.com/r/nextjs/comments/11rc9ru/generate_pdf_in_nextjs/
*/}

const about = () => {
    return (
      <div className="container">
        <h1>Tässä on esiteltynä Jooga-asanoita 28 kappaletta</h1>
        <p>  - vielä ei haeta näitä tietoja tietokannasta. To be Done, tulevaisuudessa..</p>
        <p>  - nämä Asanat on nopeasti otettu Setpose.com:n sivulta, että olisi ensihätään, jotain.</p>        
        <p>  - https://setpose.com/poses/yoga-poses</p>


        <div className="Taulukko">
           <table>

           <thead>
              <tr>
                <th>Kuva</th>
                <th>Nimi</th>
                <th>Kuvaus</th>
                <th>Tarkemmat tiedot</th>
              </tr>
           </thead>

           <tbody>
              <tr>
                <td><Image src="/jooga_poseeraukset/boat-pose.png" width={150} height={150} /></td> 
                <td>Boat</td>
                <td>Istu lattialla, nosta jalat ylöspäin ja kurota käsillä jalkoja.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/bound-ankle-pose.png" width={150} height={150} /></td> 
                <td>Bound ankle</td>
                <td>Istu lattialla lotus asennossa, pidä kädet selän takana tukena lattiaa vasten.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/bow-pose.png" width={150} height={150} /></td> 
                <td>Bow</td>
                <td>Makaa mahallaan lattialla, taivuta jalkoja ylöspäin ja kurota käsillä jalkoja.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>              

              <tr>
                <td><Image src="/jooga_poseeraukset/bridge-pose.png" width={150} height={150} /></td> 
                <td>Bridge</td>
                <td>Istu lattialla, nosta pyllyä ylöspäin, pidä kädet sivulla suorana.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/camel-pose.png" width={150} height={150} /></td> 
                <td>Camel</td>
                <td>Selkä kyttyränä.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/chair-pose.png" width={150} height={150} /></td> 
                <td>Chair</td>
                <td>Esitä tuolia.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/corpse-pose.png" width={150} height={150} /></td> 
                <td>Corpse</td>
                <td>Makaa lattialla ja esitä ruumista.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/crow-pose.png" width={150} height={150} /></td> 
                <td>Crow</td>
                <td>Esitä Korppia tai Varista.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/dolphin-pose.png" width={150} height={150} /></td> 
                <td>Dolphin</td>
                <td>Esitä delfiiniä.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/downward-facing-dog.png" width={150} height={150} /></td> 
                <td>Downward facing dog</td>
                <td>Alaspäin katsovaa koiraa esittäen. </td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/forearm-stand.png" width={150} height={150} /></td> 
                <td>Forearm stand </td>
                <td>Käsillä seisonta.</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/four-limbed-staff-pose.png" width={150} height={150} /></td> 
                <td>Four limbed staff </td>
                <td>Nelijalkainen...</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   

              <tr>
                <td><Image src="/jooga_poseeraukset/half-moon-pose.png" width={150} height={150} /></td> 
                <td>Half moon</td>
                <td>Puolikuu...</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   

              <tr>
                <td><Image src="/jooga_poseeraukset/intense-side-stretch.png" width={150} height={150} /></td> 
                <td>Intense side stretch </td>
                <td>Sivu........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


              <tr>
                <td><Image src="/jooga_poseeraukset/mountain-pose.png" width={150} height={150} /></td> 
                <td>Mountain pose </td>
                <td>Vuori........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>   


               <tr>
                <td><Image src="/jooga_poseeraukset/plank-pose.png" width={150} height={150} /></td> 
                <td>Plank pose </td>
                <td>Lauta........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/revolved-triangle-pose.png" width={150} height={150} /></td> 
                <td>Revolved triangle</td>
                <td>KOlmio........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/seated-forward-fold.png" width={150} height={150} /></td> 
                <td>Seated forward fold</td>
                <td>Istuen Eteenpäin taivutus.......</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/shoulder-stand.png" width={150} height={150} /></td> 
                <td>Shoulder stand</td>
                <td>Olkapäillä seisonta.....</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/side-plank.png" width={150} height={150} /></td> 
                <td>Side plank </td>
                <td>Sivu..............</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/tree-pose.png" width={150} height={150} /></td> 
                <td>Tree pose </td>
                <td>Esitä puuta.............</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/triangle-pose.png" width={150} height={150} /></td> 
                <td>Triangle </td>
                <td>Triangeli............</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/upward-facing-dog.png" width={150} height={150} /></td> 
                <td>Upward facing dog </td>
                <td>Ylöspäin katsovaa koiraa esittäen............</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/warrior-1.png" width={150} height={150} /></td> 
                <td>Warrior 1 </td>
                <td>Sotilas 1...........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>

              <tr>
                <td><Image src="/jooga_poseeraukset/warrior-2.png" width={150} height={150} /></td> 
                <td>Warrior 2 </td>
                <td>Sotilas 2...........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/warrior-3.png" width={150} height={150} /></td> 
                <td>Warrior 3 </td>
                <td>Sotilas 3...........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>


              <tr>
                <td><Image src="/jooga_poseeraukset/wheel-pose.png" width={150} height={150} /></td> 
                <td>Wheel pose </td>
                <td>Kärrynpyörää..........</td>
                <td><button>Lisää tietoa tästä Asanasta</button></td>
              </tr>



            </tbody>

           </table>
        </div>



 

 

      </div>




    )
  }
  
  export default about