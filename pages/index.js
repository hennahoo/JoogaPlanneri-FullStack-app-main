import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux'
import { todoActions } from 'features/todoSlice'
import Image from 'next/image'

export default function Home() {
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1>Yogaplanner sovellus proto v.0.5.1</h1>
      <p> Tämä on prototyyppi JoogaPlannerista, testailua ja kokeilua <br></br>
          Sovelluksen avulla voit suunnitella Joogaharjoituksia helposti. <br></br>
          Web-sovellus käyttää React, Next.js, PostgreSQL ja Prisma teknologioita. <br></br>
          Käyttäjä voi luoda tunnukset, kirjautua sisään ja tallentaa talteen omia joogaharjoituksia. <br></br>               
      </p>


      <p>
        Voit <Link href="/todo"> kokeilla sovellusta kirjautumatta</Link>, mutta tallentaaksesi sinun täytyy olla kirjatunut käyttäjä. 
              <Link href="/login"><span onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}> Luo käyttäjätili</span></Link> tai 
              <Link href="/login"><span onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}> Kirjaudu sisään</span></Link>.</p>
        <div>

        <Image src="/logo.png" width={200} height={200} />
        <Image src="/jooga_poseeraukset/boat-pose.png" width={200} height={200} />
        <Image src="/jooga_poseeraukset/bow-pose.png" width={200} height={200} />
        <Image src="/jooga_poseeraukset/camel-pose.png" width={200} height={200} />

        </div>


    </div>

  )
}
