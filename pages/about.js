import React, {useEffect} from "react";
import Head from 'next/head'

import Image from 'next/image'
;
import { Accordion } from "flowbite-react";


export default function About() {
  

 return (
    
      <div  className="bg-white dark:bg-gray-900">
      
           <Head>
        
             <title>About - ONoteBook</title>
        
            <meta name="description" content="ONoteBook - Your notes safe on the cloud." />

            <link rel="icon" href="/favicon.png" />
      
         </Head>

      
     
      <section className="body-font dark:text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <h2 className="mb-4 text-center text-2xl font-bold text-black underline dark:text-white">ABOUT US</h2>
          
        <div className="mx-auto w-full text-center lg:w-3/4 xl:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mb-8 inline-block h-8 w-8 text-gray-500" viewBox="0 0 975.036 975.036">
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="text-lg leading-relaxed">This is another product of OpenSourceGames named <kbd className="bg-slate-600 leading-relaxed rounded-md text-[silver] p-0.5">ONoteBook</kbd>.It is a product of OpenSourceGames made with <a href="https://nextjs.org">nextjs</a>.
Save your notes in the cloud safely for free with O-NoteBook.This is very easy to use product which can be used to save your important things as a note. Also if you are a web developer then you can save some html css code(inline) also.</p>
          <span className="mt-8 mb-6 inline-block h-1 w-10 rounded bg-indigo-500"></span>
          <h2 className="title-font text-sm font-medium tracking-wider text-blue-500 dark:text-white">SINCHAN MAITRA</h2>
          <p className="text-black dark:text-gray-500">By OpenSourceGames</p>
        </div>
      </div>
    </section>
<div className="relative">

<div className="py-8 w-[96vw] ml-3">
<Accordion>
  <Accordion.Panel className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-80" open={true}>
    <Accordion.Title arrowIcon={undefined}>
      About OpenSourceGames
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        OpenSource is the free source of HTML CSS and JAVA Script based Games.
   In this website you will get many interesting and exciting games. As a team of passionate gaming enthusiasts, OpenSource is dedicated to celebrating the gaming community. Our expansive content includes current news, recent releases and helpful guides, all of which are geared for our fellow gamers, novices and professionals alike. We&apos;re committed to enhancing your gaming experience. You can contact us for one-on-one support or browse our ever-expanding selection of articles and videos to find exactly what you&apos;re looking for. We&apos;re looking forward to from you.

      </p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        Learn more about at:
      </p>
      <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
        <li>
          <a
            href="https://osourcegames.firebaseapp.com/about"
            rel="nofollow"
            className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer"
          >
            OpenSourceGames
          </a>
        </li>
      </ul>
    </Accordion.Content>
  </Accordion.Panel>
<Accordion.Panel className="flex justify-between items-center p-5 w-full font-medium text-left text-gray-500 rounded-t-xl border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-80">
    <Accordion.Title arrowIcon={undefined}>
      About ONoteBook
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
         It is a product of OpenSourceGames made with <a href="https://nextjs.org/" target="_blank" rel="noreferrer"className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">nextjs</a> and <a href="https://mongodb.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer">mongodb.</a><br />
        Save your notes in the cloud safely for free with O-NoteBook.
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
</div>
</div>
 </div>
 
 )

}
