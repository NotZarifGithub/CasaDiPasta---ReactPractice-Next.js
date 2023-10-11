
const button = ({text, bgcolor, textcolor}) => {
  return (
    <div className={`inline-block p-[15px] ${bgcolor} ${textcolor} rounded-lg cursor-pointer hover:rounded-xl hover:scale-95 transition duration-300 ease-in-out`}>
      <p className='text-sm font-semibold uppercase'>
        {text}
      </p>
    </div>
  )
}

export default button