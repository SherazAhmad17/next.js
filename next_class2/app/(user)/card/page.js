import Image from 'next/image'


const Card = () => {
  return (

    <>
      <div className="w-72 bg-white rounded-2xl shadow-md p-5 text-center">

        <Image src="next.svg" width={100} height={100} alt="next.js" className='w-full h-full rounded-full' />

        <h2 className="mt-3 text-lg font-semibold">Sherii</h2>
        <p className="text-gray-500 text-sm">Full Stack Developer</p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Follow
        </button>
      </div> 

      <div className="w-72 bg-white rounded-2xl shadow-md p-5 text-center position: relative">

        <Image src="window.svg" alt="window" fill={true} className='position:absolute' placeholder='blur' blurDataURL='/window.svg' />

        <h2 className="mt-3 text-lg font-semibold">Sherii</h2>
        <p className="text-gray-500 text-sm">Full Stack Developer</p>

        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
          Follow
        </button>
      </div>  
      </>
  )
}

export default Card
