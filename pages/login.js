import { useState } from "react"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { todoActions } from "features/todoSlice"
import { useDispatch, useSelector } from "react-redux"

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {data: session, status} = useSession()
  const isCreatingNewAccount = useSelector(state => state.todos.isCreatingNewAccount)


  const submitHandler = async (event) => {
    event.preventDefault()
    if (isCreatingNewAccount) {
      try {
        const result = await createUser(email, password)
      } catch (error) {
        console.log(error)
      }
    } else {
      const result = await signIn("credentials", { 
        email: email,
        password: password,
        callbackUrl: "/todo"
      })
      console.log(result)
  }
}

  const createUser = async () => {
    const response = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message)
    }

    return data
  }

  if (status === "loading") {
    return <div className="bouncing-loader">
      <div></div>
      <div></div>
      <div></div>
    </div>
  }

  if (status === "authenticated") {
    window.location.href = "/todo"
  }

  console.log(session, status)
  return (
    <>
    <div className="container">
      {isCreatingNewAccount ? <h1>Luo uusi käyttäjätili</h1>: <h1>Kirjaudu sisään</h1>}
      <form onSubmit={submitHandler} className="loginForm">
        <label htmlFor="email">Sähköpostiosoite:</label>
        <input type="email" id="email" onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="password">Salasana:</label>
        <input className="passwordInput" type={showPassword ? "text" : "password"} id="password" onChange={(event) => setPassword(event.target.value)} />
        <img className="hideIcon" src="/hide.png" alt="Show or hide password" onClick={() => setShowPassword(!showPassword)} />
        <button type="submit">{isCreatingNewAccount ? "Luo tili" : "Kirjaudu"}</button>
      </form>
      {isCreatingNewAccount ?
        <p className="toggleSignin" onClick={() => dispatch(todoActions.isCreatingNewAccount(false))}>Jos sinulla on jo tili? Kirjaud sisään!</p> :
        <p className="toggleSignin" onClick={() => dispatch(todoActions.isCreatingNewAccount(true))}>Jos sinulla ei ole tiliä? Luo käyttäjätili!</p> }

    </div>
    </>
  )
}


export default Login