import React from "react";
import Head from "next/head";

export default function fourError() {
  return (
  <div className="bg-white dark:bg-gray-800">
    <Head>
     <title>404  - ONoteBook</title>
        
     <link rel="icon" href="/favicon.png" />
 
   </Head>
    <div className="flex align-center justify-center py-7.5 py-[11rem]">
<a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">404 Error Occured</h5><p className="font-normal text-gray-700 dark:text-gray-400">An error occurred on client.The requested page cannot be found.</p>
</a>
    </div>
</div>
  )
}

