import ChildFour from "./ChildFour"

function ChildThree({user,setUser}) {
  return (
    <div className="child-three">
        <h1>ChildThree renders the <span style={{color: "#ffa628"}}>ChildFour</span> component</h1>
        <p>The `user` data is passed 👇 to the ChildFour component</p>
        <ChildFour user={user} setUser={setUser}/>
    </div>
  )
}
export default ChildThree