import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { todoActions } from 'features/todoSlice'
import Image from 'next/image'

export default function Home() {
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Tämä on YogaPlanner joogaharjoitusten suunnittelusovellus proto v.0.5.1</h1>
      <p> Ensimäinen prototyyppi, testailua ja kokeilua varten.<br></br>
          Sovelluksen avulla voit suunnitella Joogaharjoituksia helposti. <br></br>
          Käyttäjä voi luoda tunnukset, kirjautua sisään ja tallentaa talteen omia joogaharjoituksia. <br></br>               
      </p>

      <p> - Sivusto on luotu käyttäen Next.js, Frameworkiä ja tietokantana on käytetty PostgreSQL tietokantaa.  <br></br>
          - YogaPlanner projekti on Jyväskylän Ammattikorkeakoulun kesäprojekti 2023. <br></br>
        <a href="https://yogaplanner.pages.labranet.jamk.fi/site/" target="_blank" rel="noreferrer">YogaPlanner projektin web-sivu</a>. <br></br>
          - Blogi-sivustolta löytyy lisätietoa projektin etenemisestä ja käytetyistä tekniikoista. <br></br>       
          <a href="https://yogaplannerblog.webnode.fi/" target="_blank" rel="noreferrer">YogaPlanner projektin blogi-sivu</a>. <br></br>         
          <br></br>  
      </p>


      <p>
        Voit <Link href="/todo"> kokeilla sovellusta kirjautumatta</Link>, mutta tallentaaksesi sinun täytyy olla kirjatunut käyttäjä. 
              <Link href="/login"><span onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}> Luo käyttäjätili</span></Link> tai 
              <Link href="/login"><span onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}> Kirjaudu sisään</span></Link>.</p>
        <div>

        <Image src="/logo1.jpg" width={200} height={200} />
        <Image src="/jooga_poseeraukset/boat-pose.png" width={200} height={200} />

        <Image src="/jooga_poseeraukset/camel-pose.png" width={200} height={200} />
        <Image src="/logo.png" width={200} height={200} />

        </div>


    </div>

  )
}
