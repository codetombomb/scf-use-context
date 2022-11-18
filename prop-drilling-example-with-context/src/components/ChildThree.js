import ChildFour from "./ChildFour"

function ChildThree() {
  return (
    <div className="child-three">
        <h1>ChildThree renders the <span style={{color: "#ffa628"}}>ChildFour</span> component</h1>
        <p>The `user` data is passed 👇 to the ChildFour component</p>
        <ChildFour />
    </div>
  )
}
export default ChildThree