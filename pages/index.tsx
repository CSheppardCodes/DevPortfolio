import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-scroll-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

      <Head>
        <title>Christopher's Portfolio</title>
      </Head>

      <Header/>

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>
      
      <section id="skills" className='snap-start'>
        <Skills />
      </section>
      
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      {/*<Link href={'#hero'}>here is different
        <footer className='sticky bottem-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src="https://i.imgur.com/e2yvD6A.png" alt="bottem pic"/>
          </div>
        </footer>
  </Link>*/}
    </div>
  )
}
