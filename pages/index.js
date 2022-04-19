import Head from 'next/head'

import Image from 'next/image'

import Link from "next/link"
import {Journal, Cloud, PencilSquare, Trash, Github, BoxArrowUpRight, PersonPlus} from "react-bootstrap-icons";

export default function Home() {
  
 return (
    
      <div className="body-font bg-white dark:bg-gray-900 text-gray-400">
      
           <Head>
        
             <title>ONoteBook - Your notes safe on the cloud.</title>
        
            <meta name="description" content="ONoteBook - Your notes safe on the cloud." />
                        <link rel="icon" href="/favicon.png" />
      
         </Head>

      
<main>
        <div className="container mx-auto flex flex-col items-center justify-center px-5 py-24">
          <img className="mb-10 w-24 rounded object-cover object-center" alt="favicon" src="/favicon.png" />
          <div className="w-full text-center">
            <h1 className="title-font mb-4 text-3xl font-medium text-black dark:text-white sm:text-4xl ">ONoteBook</h1>
            <p className="mb-8 justify-center flex inline text-black dark:text-[silver]">Quickly save your&nbsp;<Journal className="mt-1"/>&nbsp;notes on the&nbsp;<Cloud className="mt-1"/>&nbsp;cloud, &nbsp;<PencilSquare className="mt-1"/>&nbsp;update and &nbsp;<Trash className="mt-1"/>&nbsp;delete your notes online, with this powerfull tool O-NoteBook.</p>
            <div className="flex justify-center">
              <Link href={"/notes"}><a><button className="inline-flex rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"><PencilSquare className="mt-2"/>&nbsp;Start Writing Notes</button></a></Link>
              <Link href={"https://github.com/abindent/ONoteBook"}><a><button className="ml-4 inline-flex rounded border-0 bg-gray-800 py-2 px-6 text-lg text-white dark:text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"><Github className="mt-1"/>&nbsp;Github</button></a></Link>
            </div>
          </div>
        </div>
      </main>
<section className="body-font bg-white text-black dark:bg-gray-900 dark:text-gray-400">
<h2 className="text-2xl dark:text-white text-center text-black font-bold"></h2>
  <div className="container mx-auto px-5 py-24">
    <div className="-mx-4 -mb-10 -mt-4 flex flex-wrap space-y-6 sm:-m-4 md:space-y-0">
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full dark:bg-gray-800 text-indigo-400">
          <img className="h-10 w-10" src="https://osourcegames.firebaseapp.com/assets/images/canva.png" alt="Img" />
        </div>
        <div className="flex-grow">
          <h2 className="title-font mb-3 text-lg font-medium text-white">About OpenSourceGames</h2>
          <p className="text-base leading-relaxed">OpenSource is the free source of HTML CSS and JAVA Script based Games. In this website you will get many interesting and exciting games. As a team of passionate gaming enthusiasts, OpenSource is dedicated to celebrating the gaming community.</p>
          <Link href={"https://osourcegames.firebaseapp.com"}><a><button className="mx-auto mt-16 flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"><BoxArrowUpRight className="mt-1" />&nbsp;Visit</button></a></Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full dark:bg-gray-800 text-indigo-400">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="h-10 w-10" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx={12} cy={7} r={4} />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="title-font mb-3 text-lg font-medium text-white">Auth</h2>
          <p className="text-base leading-relaxed">Very easy authentication system. No need for email verification like stuffs but to enjoy this app by creating a note.</p>
          <Link href={"/signup"} ><a><button className="mx-auto lg:mt-[7rem]  md:mt-[10.5rem] sm:mt-[4rem] flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"><PersonPlus className="mt-[0.423rem]" />&nbsp;SignUp</button></a></Link>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 text-center md:w-1/3">
        <div className="mb-5 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full dark:bg-gray-800 text-indigo-400">
          <svg className="h-10 w-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve">
            <g>
              <g>
                <g>
                  <path d="M179.184,170.667h170.667c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H179.184
				c-4.71,0-8.533,3.823-8.533,8.533C170.651,166.844,174.474,170.667,179.184,170.667z" />
                  <path d="M484.754,351.497l-17.067-17.067c-13.124-13.116-33.092-13.09-46.199,0L309.684,446.234
				c-1.604,1.596-2.5,3.772-2.5,6.033v51.2c0,4.71,3.814,8.533,8.533,8.533h51.2c2.27,0,4.437-0.896,6.033-2.5l111.804-111.804
				C498.348,384.102,498.348,365.099,484.754,351.497z M410.454,369.596l13.534,13.534l-74.138,74.138l-13.534-13.534
				L410.454,369.596z M324.251,494.933v-39.134l39.134,39.134H324.251z M375.451,482.867l-13.534-13.534l74.138-74.138
				l13.525,13.534L375.451,482.867z M472.688,385.63l-11.034,11.034l-39.134-39.134l11.034-11.034c6.758-6.75,15.292-6.767,22.067,0
				l17.067,17.067C479.591,370.475,479.591,378.726,472.688,385.63z" />
                  <path d="M315.717,51.2h17.067c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-17.067
				c-4.719,0-8.533,3.823-8.533,8.533C307.184,47.377,310.998,51.2,315.717,51.2z" />
                  <path d="M366.917,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.159-20.489-17.067-24.03V8.533c0-4.71-3.814-8.533-8.533-8.533
				s-8.533,3.823-8.533,8.533V52.77c-9.907,3.541-17.067,12.919-17.067,24.03C341.317,90.914,352.803,102.4,366.917,102.4z
				 M366.917,68.267c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533
				C358.384,72.098,362.207,68.267,366.917,68.267z" />
                  <path d="M179.184,221.867h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-153.6
				c-4.71,0-8.533,3.823-8.533,8.533C170.651,218.044,174.474,221.867,179.184,221.867z" />
                  <path d="M401.051,51.2h17.067c12.442,0,25.6,13.158,25.6,25.6v221.158c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533
				V76.8c0-21.931-20.736-42.667-42.667-42.667h-17.067c-4.719,0-8.533,3.823-8.533,8.533C392.517,47.377,396.332,51.2,401.051,51.2
				z" />
                  <path d="M281.584,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.159-20.489-17.067-24.03V8.533c0-4.71-3.814-8.533-8.533-8.533
				c-4.719,0-8.533,3.823-8.533,8.533V52.77c-9.907,3.541-17.067,12.919-17.067,24.03C255.984,90.914,267.47,102.4,281.584,102.4z
				 M281.584,68.267c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533
				C273.051,72.098,276.874,68.267,281.584,68.267z" />
                  <path d="M375.451,264.533c0-4.71-3.814-8.533-8.533-8.533H179.184c-4.71,0-8.533,3.823-8.533,8.533
				c0,4.71,3.823,8.533,8.533,8.533h187.733C371.636,273.067,375.451,269.244,375.451,264.533z" />
                  <path d="M179.184,307.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h170.667c4.719,0,8.533-3.823,8.533-8.533
				s-3.814-8.533-8.533-8.533H179.184z" />
                  <path d="M281.584,443.733c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H34.117V76.8c0-12.442,13.158-25.6,25.6-25.6
				h17.067c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533H59.717c-21.931,0-42.667,20.736-42.667,42.667v392.533
				c0,21.931,20.736,42.667,42.667,42.667h221.867c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H59.717
				c-9.574,0-19.507-7.808-23.612-17.067h245.478c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H34.117v-17.067H281.584
				z" />
                  <path d="M127.984,204.8h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,208.623,132.694,204.8,127.984,204.8z" />
                  <path d="M127.984,358.4h-17.067c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533
				S132.694,358.4,127.984,358.4z" />
                  <path d="M230.384,51.2h17.067c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-17.067
				c-4.71,0-8.533,3.823-8.533,8.533C221.851,47.377,225.674,51.2,230.384,51.2z" />
                  <path d="M298.651,358.4H179.184c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467
				c4.719,0,8.533-3.823,8.533-8.533S303.37,358.4,298.651,358.4z" />
                  <path d="M127.984,153.6h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,157.423,132.694,153.6,127.984,153.6z" />
                  <path d="M127.984,256h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,259.823,132.694,256,127.984,256z" />
                  <path d="M145.051,51.2h17.067c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-17.067
				c-4.71,0-8.533,3.823-8.533,8.533C136.517,47.377,140.34,51.2,145.051,51.2z" />
                  <path d="M127.984,307.2h-17.067c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533
				S132.694,307.2,127.984,307.2z" />
                  <path d="M196.251,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.151-20.489-17.067-24.03V8.533c0-4.71-3.823-8.533-8.533-8.533
				s-8.533,3.823-8.533,8.533V52.77c-9.916,3.541-17.067,12.919-17.067,24.03C170.651,90.914,182.137,102.4,196.251,102.4z
				 M196.251,68.267c4.702,0,8.533,3.831,8.533,8.533c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533
				C187.717,72.098,191.549,68.267,196.251,68.267z" />
                  <path d="M110.917,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.151-20.489-17.067-24.03V8.533c0-4.71-3.823-8.533-8.533-8.533
				c-4.71,0-8.533,3.823-8.533,8.533V52.77C92.468,56.311,85.317,65.69,85.317,76.8C85.317,90.914,96.803,102.4,110.917,102.4z
				 M110.917,68.267c4.702,0,8.533,3.831,8.533,8.533c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533
				C102.384,72.098,106.215,68.267,110.917,68.267z" />
                </g>
              </g>
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
        </div>
        <div className="flex-grow">
          <h2 className="title-font mb-3 text-lg font-medium text-white">Notes</h2>
          <p className="text-base leading-relaxed">Keep your notes saved and secured in the cloud with OpenSourceGame's new O-NoteBook. It is very easy and reliable, made using ReactJs, MongoDB, Express, NodeJs and Bootstrap.</p>
          <Link href={"/notes"}><a><button className="mx-auto  lg:mt-[5rem] md:mt-[7.34rem] sm:mt-[4rem] flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none"><PencilSquare className="mt-1.5"/>&nbsp;Start Writing Notes</button></a></Link>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
 
 )

}
