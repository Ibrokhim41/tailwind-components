


const Button = ({icon = null, customClass, width = '', text}) => {
  return (
    <button className={`${customClass} flex justify-center items-center bg-teal text-white hover:bg-teal-light border rounded-md py-[5px] px-[10px] transition ease-in delay-75 hover:translate-y-[-2px]`}>
        {icon && icon}
        <p className="px-[5px]">{text}</p>
    </button>
  )
}

export default Button;