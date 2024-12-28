
function Button({imgUrl,ClassName,handleClick,title}) {
  return (
    <button style={{width:100}} className={ClassName} onClick={handleClick} title={title}>
        <img src={imgUrl} alt="left-arrow" className="img-fluid"/>
    </button>
  )
}

export default Button