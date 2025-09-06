import './About.css'
import Fapema from '../../assets/fapema.png'
import Solar from '../../assets/solar.jpeg'
import Ong from '../../assets/ong.png'
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function About() {
    useEffect(() => {
        gsap.fromTo(".project-card",
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                stagger: 0.7,
                scrollTrigger: "#project"
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo("#right",
            { opacity: 0, x: 50 },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                stagger: 0.5,
                scrollTrigger: "#right"
            }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo("#left",
            { opacity: 0, x: -50 },
            {
                opacity: 1,
                x: 0,
                duration: 2,
                stagger: 0.5,
                scrollTrigger: "#left"
            }
        );
    }, []);


    return (
        <>

            {/* About Me Section */}
            <main className='font-[Poppins] max-w-9/10 h-full bg-sky-700 rounded-xl -ml-5 mt-20 '>
                <section className='flex  flex-col justify-between items-center '>
                    <h1 className='flex justify-center mx-auto text-white text-xl mt-6 mb-4 font-medium sm:font-semibold sm:text-2xl '>Sobre</h1>

                    <p className='flex  text-white text-base w-full pl-8 pr-4 sm:text-lg  sm:max-w-2xl sm:pl-15 md:max-w-4xl md:pl-12 '>Atualmente, curso o último ano do Ensino Médio do Iema Dr João Bacelar Portela,
                        onde curso Técnico em Informática para a Internet, desenvolvi habilidades de desenvolvimento web ao longo da formação
                        e por meio de iniciativas complementares. Tenho interesse constante em aprender novas linguagens e tecnologias, buscando evoluir tanto na parte técnica quanto
                        na parte de criação de interfaces eficientes e bem estruturadas.
                    </p>

                    <p className='ml-2 w-9/10 border-2 border-white  mt-5 mb-5'></p>
                </section>

                <section className='flex flex-col justify-center'>
                    <h1 className='flex justify-center mx-auto text-white text-lg mb-4 font-medium sm:font-semibold sm:text-xl'>Experiências</h1>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pl-10 pr-4 text-white mb-4' id='skills'>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>HTML </p>
                        <p className='text-base text-center h-auto  rounded-sm' id='right'>CSS</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>JavaScript</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='right'>Tailwind CSS</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>React</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='right'>React Native</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>Next</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='right'>TypeScript</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>Python</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='right'>Figma</p>
                        <p className='text-base text-center h-auto  rounded-sm' id='left'>Node</p>
                    </div>
                    <p className='ml-6 border-2 border-white mr-6 sm:ml-8 md:ml-10 md:mr-8 lg:ml-16 '></p>
                </section>

                <section className=' text-white '>
                    <h1 className='flex justify-center mx-auto text-white text-lg mb-4 mt-4 font-medium sm:font-semibold sm:text-xl'>Capacitações</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 pl-8 sm:pl-14 pr-6 '>
                        <div className='flex flex-col md:mx-auto mb-4'>
                            <div className='flex items-center gap-4'>
                                <p className='flex justify-start text-base sm:text-lg sm:font-normal font-light'>Web Design Responsivo</p>
                                <a href="https://www.freecodecamp.org/certification/gabrielsilveiralima/responsive-web-design" target='_blank' >
                                    <svg xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 mt-0.5 '> <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5' /> </svg>
                                </a>
                            </div>
                            <div className='flex text-sm gap-3'>
                                <p>Concluido - 2025</p>
                                <p>FreeCodeCamp, EAD</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:mx-auto  mb-4'>
                            <div className='flex items-center gap-4'>
                                <p className='flex justify-start text-base sm:text-lg sm:font-normal font-light'>Tailwind CSS</p>
                                <a href="https://www.udemy.com/certificate/UC-639f5553-24af-4ab7-97c4-5ad96259e508/" target='_blank' >
                                    <svg xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 mt-0.5'> <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5' /> </svg>
                                </a>
                            </div>
                            <div className='flex text-sm gap-3'>
                                <p>Concluido - 2025</p>
                                <p>Udemy, EAD</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:mx-auto  mb-4 '>
                            <div className='flex items-center gap-4'>
                                <p className='flex justify-start text-base sm:text-lg sm:font-normal font-light'>NodeJS, React e TypeScript</p>
                            </div>
                            <div className='flex text-sm gap-3'>
                                <p>Cursando</p>
                                <p>Udemy, EAD</p>
                            </div>
                        </div>

                        <div className='flex flex-col md:mx-auto mb-10 '>
                            <div className='flex items-center gap-4'>
                                <p className='flex justify-start text-base sm:text-lg sm:font-normal font-light'>Imersão Dev 9ª Edição </p>
                                <a href="https://cursos.alura.com.br/user/gabrielsilveiralima/immersion/certificate/68477" target='_blank' >
                                    <svg xmlns='https://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4 mt-0.5'> <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5H19.5V10.5M10.5 13.5L19.5 4.5M4.5 19.5H19.5' /> </svg>
                                </a>
                            </div>
                            <div className='flex text-sm gap-8'>
                                <p>Concluido - 2025</p>
                                <p>Alura, EAD</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


            {/* Projects Section */}
            <main className="mt-20 px-4 font-[Poppins]" id='projects'>
                <h1 className="text-2xl text-sky-800 font-semibold text-center mb-10">Projetos</h1>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start" id="project">
                    <div className="project-card relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-4 right-8 flex gap-2 text-3xl text-gray-700">
                            <i className="devicon-react-original colored"></i>
                            <i className="devicon-tailwindcss-plain colored"></i>
                        </div>

                        <h2 className="text-lg font-semibold text-sky-800  mb-4">Fapema</h2>
                        <img src={Fapema} alt="Projeto Fapema" className="w-full h-40 object-cover rounded-md mb-4" />
                        <div className="flex justify-between">
                            <a href="https://fapema.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver projeto</a>
                            <a href="https://github.com/gabrielsilveiralim/fapema" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver repositório</a>
                        </div>
                    </div>

                    <div className="project-card relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-4 right-4 flex gap-2 text-3xl text-gray-700">
                            <i className="devicon-html5-plain colored"></i>
                            <i className="devicon-css3-plain colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                        </div>

                        <h2 className="text-lg font-semibold text-sky-800  mb-4">Ong Sem Fronteira</h2>
                        <img src={Ong} alt="Ong" className="w-full h-40 object-cover rounded-md mb-4" />
                        <div className="flex justify-between">
                            <a href="https://gabrielsilveiralim.github.io/ong-sem-fronteira/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver projeto</a>
                            <a href="https://github.com/gabrielsilveiralim/ong-sem-fronteira" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver repositório</a>
                        </div>
                    </div>

                    <div className="project-card relative bg-white rounded-lg shadow-md p-6">
                        <div className="absolute top-4 right-4 flex gap-2 text-3xl text-gray-700">
                            <i class="devicon-nextjs-plain colored"></i>
                            <i class="devicon-threejs-original colored"></i>
                            <i class="devicon-typescript-plain colored"></i>
                        </div>

                        <h2 className="text-lg font-semibold text-sky-800  mb-4">Solar System</h2>
                        <img src={Solar} alt="solar" className="w-full h-40 object-cover rounded-md mb-4" />
                        <div className="flex justify-between">
                            <a href="https://solar-syste.vercel.app/" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver projeto</a>
                            <a href="https://github.com/gabrielsilveiralim/solar-system" target="_blank" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Ver repositório</a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}