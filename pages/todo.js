import InputElement from "../components/InputElement"
import TodoRendering from "../components/TodoRendering"
import prisma from "lib/prisma"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"
import { getSession } from "next-auth/react"

import Image from 'next/image'


const Todo = ({todos}) => {
    const dispatch = useDispatch()
    
    dispatch(todoActions.hydrateTodos(todos))
    
    return (
        <div className="container">
            <h1>Joogaharjoituksesi: </h1>
            <InputElement />
            <TodoRendering />


                                                <div className="Taulukko">
                                                <table>

                                                <thead>
                                                    <tr>
                                                        <th>Kuva</th>
                                                        <th>Nimi</th>
                                                        <th>Kuvaus</th>
                                                        <th>Toiminne</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td><Image src="/jooga_poseeraukset/boat-pose.png" width={150} height={150} /></td> 
                                                        <td>Boat</td>
                                                        <td>Istu lattialla, nosta jalat ylöspäin ja kurota käsillä jalkoja.</td>
                                                        <td><button>Lisää harjoitukseen</button></td>
                                                    </tr>

                                                    <tr>
                                                        <td><Image src="/jooga_poseeraukset/bound-ankle-pose.png" width={150} height={150} /></td> 
                                                        <td>Bound ankle</td>
                                                        <td>Istu lattialla lotus asennossa, pidä kädet selän takana tukena lattiaa vasten.</td>
                                                        <td><button>Lisää harjoitukseen</button></td>
                                                    </tr>

                                                    <tr>
                                                        <td><Image src="/jooga_poseeraukset/bow-pose.png" width={150} height={150} /></td> 
                                                        <td>Bow</td>
                                                        <td>Makaa mahallaan lattialla, taivuta jalkoja ylöspäin ja kurota käsillä jalkoja.</td>
                                                        <td><button>Lisää harjoitukseen</button></td>
                                                    </tr>              

                                                    <tr>
                                                        <td><Image src="/jooga_poseeraukset/bridge-pose.png" width={150} height={150} /></td> 
                                                        <td>Bridge</td>
                                                        <td>Istu lattialla, nosta pyllyä ylöspäin, pidä kädet sivulla suorana.</td>
                                                        <td><button>Lisää harjoitukseen</button></td>
                                                    </tr>   

                                                    </tbody>

                                                </table>
                                                </div>


        </div>
    )
}

export default Todo

export const getServerSideProps = async (context) => {
    const session = await getSession({ req: context.req })
    if (!session) {
        return { props: { todos: [] } }
    }
    const todos = await prisma.todos.findMany({
        where: {
            userId: session.user.email
        }
    })
    return { props: {todos} }
  }






  