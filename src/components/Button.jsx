
const Button = ({label , iconURL ,backgroundColor , textColor , borderColor , fullWidth}) => {
  return (
    // Now i am making this button {className dynamic} so, we get a ability to apply additional className depending on specific conditions
   <button className={`flex 
    justify-center gap-2 items-center px-7 py-4 border font-montserrat text-lg leading-none hover:scale-95 transform transition-transform duration-300 ease-in-out
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`:"bg-coral-red  text-white"}
      rounded-full ${fullWidth && 'w-full'}"}`}
    >
    {label}
    {iconURL && <img 
        src={iconURL}
        alt="iconURL"
        className="ml-2 rounded-full w-5 h-5"
    />}
   </button>
  )
}

export default Button