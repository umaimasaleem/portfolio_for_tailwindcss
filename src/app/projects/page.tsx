import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return(
     <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
        There are my some <b>Projects</b>.
      </h1>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (2).jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (4).jpg.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-full object-cover object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (3).jpg.jpg"
          />
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full h-500 object-cover object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (7).jpg.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (8).jpg.jpg"
          />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img
          width={300}
          height={300}
            alt="gallery"
            className="w-full object-cover h-full object-center block hover:border-orange-500 hover:border-2"
            src="/images/download.png (9).jpg.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</section>
     </div>
  )
}

export default Projects