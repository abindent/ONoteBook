import Head from 'next/head'

import Image from 'next/image'

import emailjs, { init } from "emailjs-com";

export default function Contact({showAlert}) {
  
    init(process.env.REACT_APP_USER_ID);
    const SERVICE_ID = "service_kgmka0a";
    const TEMPLATE_ID = "template_ncnqz1f";
    const USER_ID = process.env.NEXT_PUBLIC_CONTACT_USER_ID;
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                showAlert("Message Sent Succesfully.", "success")
            }, (error) => {
                showAlert(error.text, "error")
            });
        e.target.reset()
    };
    return (
    
      <div className="dark:bg-slate-700">
      
           <Head>
        
             <title>Contact - ONoteBook</title>
        
            <meta name="description" content="ONoteBook - Your notes safe on the cloud."/>
 
            <link rel="icon" href="/favicon.png" />
      
         </Head>

      
       <div>
  <h2 className="text-center text-3xl font-bold underline dark:text-[silver]">CONTACT US</h2>
  <div className="flex py-3 px-3">
    <div className="dark:bg-slate-700 sm:w-full md:flex md:justify-center">
      <form onSubmit={handleOnSubmit} className="w-[75vw] md:w-full justify-center">
        <div className="grid xl:grid-cols-1 xl:gap-6">
          <div className="group relative z-0 mb-6 w-full">
            <input type="text" name="name" id="name" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
            <label htmlFor="first_name" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Name</label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input type="phone" name="phone" id="phone" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
            <label htmlFor="phone" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Phone</label>
          </div>
          <div className="group relative z-0 mb-6 w-full">
            <input type="email" name="floating_email" id="floating_email" className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required />
            <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Email</label>
          </div>
<div className="group relative z-0 mb-6 w-full">
            <textarea name="message" id="message" rows={3}  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder=" " required ></textarea>
            <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500">Message</label>
          </div>
        </div>
        <button type="submit" variant="primary" className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">Submit</button>
      </form>
    </div>
  </div>
</div>

    </div>
 
 )

}
