'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';


function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];
  return (
    <div className='p-12 bg-grey-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base text-teal-500 tracking-wide font-semibold'>FEATURED WEBINARS</h2>
          <p className='mt-2 text-3xl font-extrabold tracking-tight leading-6 sm:4xl'>Enhance your musical Journey</p>
        </div>
        <div className='mt-10'>
          <HoverEffect items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }))} />
        </div>
        <div className='mt-10 text-center'>
          <Link href={"/courses"} className='mt-20 flex justify-center items-center'>
            <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
              View All Courses
            </button>

          </Link>
        </div>

      </div>
    </div>
  )
}

export default UpcomingWebinars