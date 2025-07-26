import './Footer.css'
import Github from '../../assets/github.png'
import Linkedln from '../../assets/linkedln.png'
import Insta from '../../assets/insta.png'


export default function Footer() {
    return (
        <>

            <footer>

                <section className='flex  justify-center items-center  gap-6 sm:gap-8 mx auto mt-10 mb-10'>

                    <div className='flex h-10 w-8 sm:w-10'>
                        <a href="https://github.com/gabrielsilveiralim">
                            <img src={Github} alt="" />
                        </a>
                    </div>

                    <div className='flex h-10 w-16 sm:w-19'>
                        <a href="https://linkedin.com/in/gabriellima18?utm_sorce=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                            <img src={Linkedln} alt="" />
                        </a>
                    </div>

                    <div className='flex h-10 w-12 -mt-1 sm:w-14'>
                        <a href="https://www.instagram.com/gbrielima_/?next=%2F">
                            <img src={Insta} alt="" />
                        </a>
                    </div>







                </section>


            </footer >
        </>
    )
}