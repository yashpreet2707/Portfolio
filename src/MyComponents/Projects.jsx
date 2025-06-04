import React from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Projects = () => {

    const projects = [
        {
            title: 'NextFinance',
            description: 'Full-stack financial management platform built with Next.js, React, and Prisma. Features include multi-account support, AI-powered receipt scanning, interactive dashboards, and advanced filtering options.',
            image: '',
            technologies: ['Next.js', 'React', 'Gemini API', 'Tailwind CSS', 'Radix UI', 'React Email'],
            github: 'https://github.com/yashpreet2707/NextFinance',
            live: 'https://next-finance-three-lovat.vercel.app/',
            featured: true,
        },
        {
            title: 'BlogStack',
            description: 'Full-stack blogging platform built with the MERN stack and Firebase. Features include a responsive design, admin dashboard, recent articles section, user analytics, and optimized performance for a seamless experience.',
            image: '',
            technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Flowbite'],
            github: 'https://github.com/yashpreet2707/BlogStack',
            live: 'https://blog-stack-zeta.vercel.app/',
            featured: true,
        },
        {
            title: 'Restaurant App',
            description: 'Dynamic food ordering platform built with React, Node.js, and Redux Toolkit. Features include real-time restaurant data via Swiggy API, advanced filtering options, and seamless cart management for an enhanced user experience.',
            image: '',
            technologies: ['React', 'Express.js', 'Node.js', 'Tailwind CSS', 'Redux Toolkit'],
            github: 'https://github.com/yashpreet2707/RestaurantApp',
            live: '',
            featured: false,
        }
    ]
    return (
        <section id='projects' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12'>
                    <h2 className='mb-4 text-3xl md:text-4xl font-bold'>My Projects</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>Here are some of my recent projects that showcase my skills in full-stack development</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-4 mx-4'>
                    {projects.map((project) => (
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                                <CardAction>Card Action</CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects