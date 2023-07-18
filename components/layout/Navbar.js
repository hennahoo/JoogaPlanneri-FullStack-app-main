import Link from "next/link"
import styles from "../../styles/Navbar.module.css"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import { todoActions } from "features/todoSlice"
import { poseActions } from "features/poseSlice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const Navbar = () => {
    const { data: session, status } = useSession()
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <div className={styles.navbar   }>
            <nav>
                <ul className={styles.navlist}>
                    <li><Link href="/"><a className={router.pathname === "/" ? styles.currentLocation : ""}>YogaPlanner</a></Link></li>
                    <li><Link href="/jooga_asanat"><a className={router.pathname === "/jooga_asanat" ? styles.currentLocation : ""}>Tietoa Joogasta</a></Link></li>
       
                    <li><Link href="/pose"><a className={router.pathname === "/pose" ? styles.currentLocation : ""}>Luo uusi harjoitus</a></Link></li>

                    <li><Link href="/todo"><a className={router.pathname === "/todo" ? styles.currentLocation : ""}>Tallennetut harjoitukset</a></Link></li>

                    {session && <li><Link href="/profile"><a className={router.pathname === "/profile" ? styles.currentLocation : ""}>Käyttäjä</a></Link></li>}
                    {/* <li><Link href="/about"><a className={router.pathname === "/about" ? styles.currentLocation : ""}>Tietoa sivustosta</a></Link></li> */}
                    {session ?
                        <li><span className={styles.link} onClick={() => signOut({ callbackUrl: "/" })}>Kirjaudu ulos</span></li> :
                        <li><Link href="/login">
                            <a className={router.pathname === "/login" ? styles.currentLocation : styles.link}
                                onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}>Kirjaudu sisään</a>
                        </Link> / &nbsp;
                            <Link href="/login">
                                <a className={router.pathname === "/login" ? styles.currentLocation : styles.link}
                                    onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}>Luo käyttäjätili</a>
                            </Link></li>
                    }
                </ul>
            </nav>
        </div>)
}

export default Navbar