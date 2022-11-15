import ChildThree from "./ChildThree"

function ChildTwo({user,setUser}) {
  return (
    <div className="child-two">
        <h1>ChildTwo renders the <span style={{color: "#0e99ff"}}>ChildThree</span> component</h1>
        <p>The `user` data is passed 👇 to the ChildThree component</p>
        <ChildThree user={user} setUser={setUser}/>
    </div>
  )
}
export default ChildTwo