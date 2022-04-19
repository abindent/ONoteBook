import React from 'react';
import Head from "next/head";
import { Badge } from "flowbite-react";

export default function BetaPolicy(){

return (
<div className="bg-white dark:bg-gray-800 text-black dark:text-[silver] py-3 px-3">
  <Head>
       <title>Beta Version Policy - ONoteBook</title>
        
       <meta name="description" content="Beta Version Policy  - ONoteBook "/>
 
       <link rel="icon" href="/favicon.png" />
  </Head> 
  <div className="flex align-center justify-center py-7.5 py-[5rem]">

<a className="block p-6  bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="inline-flex mb-2 text-2xl font-bold text-gray-900 dark:text-white"><Badge color="red">Beta</Badge>&nbsp;<span>Beta Version Policy</span></h5>
<p className="font-normal text-gray-700 dark:text-gray-400">From a long time we are working on this feature to switch between the versions of this app and this functionality is still not available.This page is made to show you some instructions that how to switch between versions when available.Though we have not deployed the functionallity yet.</p>
</a>
    </div>
</div>
)
}