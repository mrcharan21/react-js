import React from 'react'

export default function ContainerApp() {
  return (
    <>
    <div className='container p-15 mt-3 w-1/2 mx-auto bg-black'>
   <div class="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
  <img class="size-15 shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeTsV_PamTk9MCL3nmc36jlIYfmFS5LtA5A&s" alt="ChitChat Logo" />
  <div>
    <div class="text-xl font-medium text-black dark:text-white">ChitChat</div>
    <p class="text-gray-500 dark:text-gray-400">You have a new message!</p>
  </div>
</div>
</div>

<div className='container p-15 mt-5 w-1/2 mx-auto bg-white shadow '>
<div class="flex flex-col gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
  <img class="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZO5AU41dF0YFUii1buFhZyoqqri41vZaKcw&s" alt="" />
  <div class="space-y-2 text-center sm:text-left">
    <div class="space-y-0.5">
      <p class="text-lg font-semibold text-black">Erin Lindford</p>
      <p class="font-medium text-gray-500">Product Engineer</p>
    </div>
    <button class="border-purple-200 text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
      Message
    </button>
  </div>
</div>
</div>
    <div className='container mt-5 p-5 bg-black text-white flex'> 
        <div className='w-1/2 bg-primary'>
            <p>Hii guys</p>
        </div>
        <div className='w-1/2'>
        <p>My name is charan </p>
        </div>
    </div>
 
    </>
  )
}
