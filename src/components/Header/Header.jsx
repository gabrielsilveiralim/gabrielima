import './Header.css'


export default function Header() {
    return (
        <>

            <header className='font-[Poppins]'>

                <nav className='flex justify-between items-center sticky overflow-auto top-0 z-5 bg-white w-full h-25 px-3 sm:px-5 md:px-15 lg:px-30 xl:px-40 container mx-auto  '>
                    <h1 className='flex text-2xl font-semibold text-sky-700 '>Gabriel Lima </h1>

                    <div className='flex text-base gap-6 sm:gap-10 sm:text-lg '>
                        <a href="#" className=''>Sobre</a>
                        <a href="#" className=''>Formações</a>
                        <a href="#" className='' >Contato</a>
                    </div>

                </nav>

                <section className='container mx-auto sm:px-2 md:px-12 lg:px-26 xl:px-38 '>

                    <div className='flex max-w-64 w-full pl-3 mt-3 mb-5 '>
                        <h1 className='text-2xl sm:text-3xl '>Oi, prazer <span className='flex text-sky-700 text-3xl sm:text-4xl font-bold animate-bounce duration-10000'>Gabriel Lima</span></h1>
                    </div>

                    <div className='pl-3'>
                        <h6 className='text-base text-sky-700'>Conheça-me</h6>
                        <p className='text-base max-w-md md:max-w-xl pr-2'>Sou, estudante de informática com foco em desenvolvimento web.
                            Este portfólio apresenta projetos nos quais aplico conhecimento
                            técnicos voltados à construção de interfaces eficientes, responsivos e
                            alinhadas às boas práticas de programação
                        </p>
                    </div>


                </section>
            </header>


        </>
    )
}