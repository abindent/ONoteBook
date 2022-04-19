import React from 'react';
import Link from "next/link";
import { Github, Linkedin, Discord } from "react-bootstrap-icons";

const Footer = () => {
return (<footer className="bg-white p-4 dark:bg-gray-800 sm:p-6">
    <div className="md:flex md:justify-between">
      <div className="mb-6 md:mb-0">
        <Link href={"/"}><a className="flex items-center">
          <img src="/favicon.png" className="mr-3 h-8" alt="Logo" />
          <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">ONoteBook</span>
        </a></Link>
      </div>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Navigate</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <Link href={"/about"}><a className="hover:underline">About</a></Link>
            </li>
            <li className="mb-4">
             <Link href={"/notes"}><a className="hover:underline">Notes</a></Link>
            </li>
            <li>
              <Link href={"/contact"}><a className="hover:underline">Contact Us</a></Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Follow us</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <a href="https://www.linkedin.com/in/sinchan-maitra-22a303217/" className="hover:underline">Linkedin</a>
            </li>
            <li className="mb-4">
              <a href="https://github.com/abindent" className="hover:underline">Github</a>
            </li>
            <li>
              <a href="https://discord.io/OpenSourceGames" className="hover:underline">Discord</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="mb-4">
              <Link href={"/privacy-policy"}><a className="hover:underline">Privacy Policy</a></Link>
            </li>
            <li>
              <Link href={"/beta-policy"}><a className="hover:underline">Beta Version Policy</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
      <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">&copy; 2022 <a href="https://osourcegames.firebaseapp.com" className="hover:underline">OpenSourceGames &trade;</a>. All Rights Reserved. </span>
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <a href="https://github.com/abindent"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Github className="h5 w-5 mt-1" />
</a>
        <a href="https://www.linkedin.com/in/sinchan-maitra-22a303217/"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Linkedin className="h5 w-5 mt-1" />
</a>
        <a href="https://discord.io/OpenSourceGames"  className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
          <Discord className="h5 w-5 mt-1" />
</a>
      </div>
    </div>
  </footer>

)
}

export default Footer