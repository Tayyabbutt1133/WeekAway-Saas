import React from 'react'
import Single from '../assets/single.png';
import double from '../assets/double.png';
import triple from '../assets/triple.png';


const Cards = () => {
  return (
      <>
      <div className=' w-full py-[10rem] px-4 bg-white'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
           {/* CARD 1 */}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer hover:bg-slate-200'>
            <img className=' w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className=' text-center text-4xl font-bold'>$149</p>
            <div className=' text-center font-medium'>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black '>500 GB Storage</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>1 Granted User</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black hover:bg-green-400 font-serif">Start Trial</button>
          </div>
              {/* CARD 2 */}
          <div className=' w-full shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 cursor-pointer hover:bg-slate-200'>
            <img className=' w-20 mx-auto mt-[-3rem] bg-white' src={double} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Double User</h2>
            <p className=' text-center text-4xl font-bold'>$299</p>
            <div className=' text-center font-medium'>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'> 1TB Storage</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>2 Granted User</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>Send up to 4 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black hover:bg-green-400 font-serif">Start Trial</button>
          </div>
               {/* CARD 3  */}
          <div className=' w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 cursor-pointer hover:bg-slate-200'>
            <img className=' w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="" />
            <h2 className='text-2xl font-bold text-center py-8'>Triple User</h2>
            <p className=' text-center text-4xl font-bold'>$500</p>
            <div className=' text-center font-medium'>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>1TB GB Storage</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>3 Granted User</p>
              <p className=' py-2 border-b mx-8 mt-8 border-b-black'>Send up to 10 GB</p>
            </div>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3 text-black hover:bg-green-400 font-serif">Start Trial</button>
          </div>
        </div>
      </div>   
      </>
  )
}

export default Cards
