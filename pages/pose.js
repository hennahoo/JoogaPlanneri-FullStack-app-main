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
        <h1>Tämä on testi, miten voitaisiin tehdä Drag and Drop ominaisuus, React:n avulla.</h1>  

        <DragDropTesti />

      </div>
    )
  }
  
  export default Pose


  export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req })
    if (!session) {
        return { props: { poses: [] } }
    }
    const poses = await prisma.Pose.findMany({
  
    })
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