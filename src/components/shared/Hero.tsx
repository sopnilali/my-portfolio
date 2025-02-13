import Image from 'next/image'
import Link from 'next/link'
import heroImg from '@/assets/heroimg.png';
import React from 'react'

const HeroSection = () => {
    return (
        <>
            <section
                className="  "
            >

                <div className=' py-20 mx-auto '>
                    <div className="px-6 md:py-32 py-14 text-center md:px-12 lg:text-left flex items-center  ">
                        <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
                            <div className="grid items-center gap-12 lg:grid-cols-2">
                                <div className="mt-12 lg:mt-0">
                                    <div className="mb-5 text-5xl  md:text-6xl xl:text-7xl">
                                       <h2 className='font-extrabold uppercase'> Md. Abdul Adud</h2>
                                        <h2 className='text-3xl my-4 '>I am 2nd Level React Developer</h2>
                                        <p className=" text-base">I am a software engineer, passionate about building scalable and maintainable applications. I have a deep love for learning and always strive to improve my skills.</p>
                                    </div>
                                    <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white mr-2 shadow bg-gray-600"
                                        data-te-ripple-init data-te-ripple-color="light" href="/contact" role="button">Contact Me</a>

                                    <Link
                                        className='px-12 pt-4 pb-3.5  bg-red-600 rounded-md rounded-tl-2xl hover:bg-red-800 outline-none border-none text-white rounded-br-2xl'

                                        href={'https://drive.google.com/uc?export=download&id=1jSi87WlPbI0zkfuxcqnexH3eRSWwDstC'}>Download Resume</Link>
                                </div>
                                <div className="mb-12 lg:mb-0 flex justify-center items-center">
                                    <Image alt='abdul adud' src={heroImg} className='md:w-80 hover:scale-90 transition-all my-10 rounded-lg shadow-xl  dark:shadow-black/20' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
