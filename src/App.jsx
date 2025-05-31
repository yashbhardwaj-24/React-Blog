// import Card from "./Components/Card"
// import Day1 from "./Components/Day1"
// import Day2 from "./Components/Day2"
import UserProfile, { Key, Login, Setting } from "./Components/UserProfile"

function App(){
  return (
    <div>
      <UserProfile/>
      <Login/>
      <Setting/>
      <h1>{Key}</h1>
    </div>
    
  )
  
}
export default App