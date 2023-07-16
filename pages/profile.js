import { useSession } from "next-auth/react"
import { useState } from "react"
import { changePassword } from "features/apiCalls"

const Profile = () => {
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handlePasswordChange = async (event) => {
    event.preventDefault()
    if (newPassword !== confirmPassword) {
      return alert("Salasanat eivät täsmää!")
    }
    changePassword(oldPassword, newPassword)
  }

  const { data: session, status } = useSession()
  if (status === "loading") {
    return <p>Ladataan...</p>
  }

  if (status === "authenticated") {
    return (
      <div className="container">
        <p>Olet kirjautunut sisään sähköpostiosoitteella <strong>{session.user.email}</strong></p>
        <h2>Vaihda salasana: </h2>
        <form onSubmit={handlePasswordChange} method="POST" className="profile">
          <label htmlFor="oldPassword">Vanha salasana: </label>
          <input type="password" placeholder="Vanha salasana" id="oldPassword"
            onChange={(event) => setOldPassword(event.target.value)} value={oldPassword} />
          <label htmlFor="newPassword">Uusi salasana: </label>
          <input type="password" placeholder="Uusi salasana" id="newPassword"
            onChange={(event) => setNewPassword(event.target.value)} value={newPassword} />
          <label htmlFor="confirmPassword">Vahvista uusi salasana: </label>
          <input type="password" placeholder="Vahvista uusi salasana" id="confirmPassword"
            onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} />
          <button type="submit">Vaihda salasana</button>
        </form>
      </div>

    )
  }
  if (!session) {
    window.location.href = "/login"
  }
}

export default Profile