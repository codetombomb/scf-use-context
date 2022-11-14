import ChildFive from "./ChildFive"

function ChildFour({user,setUser}) {
  return (
    <div className="child-four">
        <h1>ChildFour renders the <span style={{color: "#11ae5d"}}>ChildFour</span> component</h1>
        <p>The `user` data is passed 👇 to the ChildFour component</p>
        <ChildFive user={user} setUser={setUser}/>
    </div>
  )
}
export default ChildFour