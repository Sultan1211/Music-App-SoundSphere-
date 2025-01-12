'use client'
import React from 'react'
import courseData from "../data/music_courses.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';
interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}
function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
    return (
        <div className='py-12 bg-gray-900'>
            <div >
                <div className="text-center">
                    <h2 className='text-base text-teal-500 tracking-wide font-semibold'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl font-extrabold tracking-tight leading-6 sm:4xl'>Learn with the Best</p></div>
            </div>
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>
                {featuredCourses.map((course: Course) => (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <div className="text-lg sm:text-xl text-black mt-4 dark:text-neutral-200 mb-2">
                                    {course.title}
                                </div>

                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                    {course.description}
                                </p>

                                <Link href={`/courses/${course.slug}`}   className="text-neutral-400 dark:text-neutral-400 hover:text-blue-700  dark:hover:text-blue-300 underline mt-1"
                                >Learn More</Link>
                            </div>




                        </BackgroundGradient></div>
                ))}
            </div>
            <div>
                <Link href={"/courses"} className='mt-20 flex justify-center items-center'>
                    <button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-black text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md">
                        View All Courses
                    </button>

                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses