import DragDropTesti from "../components/PoseRendering"
import { useDispatch } from "react-redux"
import { poseActions } from "../features/poseSlice"
import { getSession } from "next-auth/react"
import prisma from "lib/prisma"


const Pose  = ({poses}) => {
  const dispatch = useDispatch()
  
  dispatch(poseActions.hydratePoses(poses))

    return (
      <div className="container">
        <h1>Tällä sivulla voit luoda oman Jooga harjoituksen</h1>  
        <p>
           - raahaa Asana uudelle riville                       <br></br>
           - tulosta painamalla tulosta nappia    (työn alla)  <br></br>
           - voit myös tallentaa harjoituksen     (työn alla)  <br></br>
           - rivin poistaminen                    (työn alla)  <br></br>

        </p>

        <DragDropTesti />         {/*  kutsuu  PoseRendering.js  tiedostossa oleva  "DragDropTestiä"  */}

      </div>
    )
  }
  
  export default Pose


  export const getServerSideProps = async (context) => {           // async listaa tiedot satunnaiseen järjestykseen
    const session = await getSession({ req: context.req })         //pitää tehdä kysely joka listaa tiedot id:n tai aakkosten mukaan
    if (!session) {
        return { props: { poses: [] } }
    }
    const poses = await prisma.Pose.findMany({                 //  Tietokannasta, postgresql,  pose taulusta, haetaan tiedot,  
                                                               // ja välitetään ne PoseRendering.js   sivun renderöinti komponentille.
    })                                                         // (Katsottu mallia, Antti Tuomolan  "todo" - esimerkistä. )
    return { props: {poses} }
  }
  
  




{/*   <p> - https://codesandbox.io/s/drag-and-drop-copy-beautiful-dnd-functional-khno7?file=/src/App.js:194-7944</p>  <br></br>
*/}





// export const getServerSideProps = async(context) => {
//    const poses = await prisma.Pose.findMany();

//    //console.log(poses);
//    let taulukko = JSON.stringify(poses);

//    //console.log(taulukko);

//   return {
//      props: { taulukko }
//      //return <DragDropTesti taulukko = {taulukko} />
//    };
// };


// const ServerComponent = () => {
//   return <DragDropTesti taulukko = {taulukko} />
// }