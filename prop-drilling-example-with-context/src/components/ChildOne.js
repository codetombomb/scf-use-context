import ChildTwo from "./ChildTwo"

function ChildOne({user,setUser}) {
  return (
    <div className="child-one">
        <h1>ChildOne renders the <span style={{color: "#9746ff"}}>ChildTwo</span> component</h1>
        <p>The `user` data is passed 👇 to the ChildTwo component</p>
        <ChildTwo user={user} setUser={setUser}/>
    </div>
  )
}
export default ChildOne