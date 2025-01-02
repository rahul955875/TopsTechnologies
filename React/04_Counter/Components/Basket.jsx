

function Basket({count,basketName}) {
  return (
    <div>
        <h3>{count} Apples</h3>
        <h4>{basketName} {count===10 && '(Full)'}{count===0 && '(Empty)'}{count===5 && '(half)'}</h4>
    </div>
  )
}

export default Basket