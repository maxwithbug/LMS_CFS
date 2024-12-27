
import {BsFacebook ,BsInstagram ,BsLinkedin ,BsTwitter} from "react-icons/bs"


export default function Footer() {
    
    const currentDate = new Date();
    const year = currentDate.getFullYear();

  return (
    <>
      <footer className='relative left-0 bottom-0 h-[10vh] py-5  flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20 '>
            <section className='text-lg '>
                copiright {year} | all right reserved 
            </section>
            <section className="flex items-center justify-center gap-5 text-2xl text-white">
                <a href="" className="hover:text-yellow-500 transition-all ease-in-out"><BsFacebook/></a>
                <a href="" className="hover:text-yellow-500 transition-all ease-in-out"><BsInstagram/></a>
                <a href="" className="hover:text-yellow-500 transition-all ease-in-out"><BsLinkedin/></a>
                <a href="" className="hover:text-yellow-500 transition-all ease-in-out"><BsTwitter/></a>
            </section>
      </footer>


    </>
  )
}
