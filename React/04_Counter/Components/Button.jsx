
function Button({imgUrl,ClassName,handleClick,title,deg}) {
  return (
    <button style={{width:100,rotate:deg}} className={ClassName} onClick={handleClick} title={title}>
        <img src={imgUrl} alt="left-arrow" className="img-fluid" />
    </button>
  )
}

export default Button