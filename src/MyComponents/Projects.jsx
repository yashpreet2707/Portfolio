import React, { lazy } from 'react'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ShineBorder } from '@/components/magicui/shine-border'
import { useTheme } from '@/utils/darkThemeProvider'
import { Button } from '@/components/ui/button'
import { ExternalLink, FolderOpen, Github } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const Projects = () => {

    const { resolvedTheme } = useTheme()

    const projects = [
        {
            title: 'NextFinance',
            description: 'Full-stack financial management platform built with Next.js, React, and Prisma.',
            fullDescription: 'Full-stack financial management platform built with Next.js, React, and Prisma. Features include multi-account support, AI-powered receipt scanning, interactive dashboards, and advanced filtering options.',
            image: '/images/NextFinance.png',
            alt: 'next-finance-img',
            technologies: ['Next.js', 'React', 'Gemini API', 'Tailwind CSS', 'Radix UI', 'React Email'],
            github: 'https://github.com/yashpreet2707/NextFinance',
            live: 'https://next-finance-three-lovat.vercel.app/',
            featured: true,
        },
        {
            title: 'BlogStack',
            description: 'Full-stack blogging platform built with the MERN stack and Firebase.',
            fullDescription: 'Full-stack blogging platform built with the MERN stack and Firebase. Features include a responsive design, admin dashboard, recent articles section, user analytics, and optimized performance for a seamless experience.',
            image: '/images/BlogStack.png',
            alt: 'blog-stack-img',
            technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Firebase', 'Tailwind CSS', 'Flowbite'],
            github: 'https://github.com/yashpreet2707/BlogStack',
            live: 'https://blog-stack-zeta.vercel.app/',
            featured: true,
        },
        {
            title: 'Restaurant App',
            description: 'Dynamic food ordering platform built with React, Node.js, and Redux Toolkit.',
            fullDescription: 'Dynamic food ordering platform built with React, Node.js, and Redux Toolkit. Features include real-time restaurant data via Swiggy API, advanced filtering options, and seamless cart management for an enhanced user experience.',
            image: '/images/RestaurantApp.png',
            alt: 'restaurant-app-img',
            technologies: ['React', 'Express.js', 'Node.js', 'Tailwind CSS', 'Redux Toolkit'],
            github: 'https://github.com/yashpreet2707/RestaurantApp',
            live: 'https://restaurant-a08wcufmv-yashpreet2707s-projects.vercel.app/',
            featured: false,
        }
    ]
    return (
        <section id='projects' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><FolderOpen style={{ width: "2rem", height: '2rem' }} className='mr-4' />My Projects</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>Here are some of my recent projects that showcase my skills in full-stack development</p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-4'>
                    {projects.map((project) => (
                        <Card key={project.title} className='relative rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
                            {project.featured && (
                                <ShineBorder shineColor={resolvedTheme === "dark" ? "green" : "black"} borderWidth={2} />
                            )}
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className='text-sm'>{project.description}</CardDescription>
                                <CardAction>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.github} target='__blank'>
                                            <Github style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                    <Button variant='ghost' size='icon'>
                                        <a href={project.live} target='__blank'>
                                            <ExternalLink style={{ width: '1.2rem', height: '1.2rem' }} />
                                        </a>
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent className='relative w-full'>
                                <img className="rounded-md w-full h-auto object-contain" src={project.image} alt={project.alt} loading="lazy" />

                            </CardContent>
                            <CardFooter className='overflow-x-scroll scrollbar-hide gap-1 mr-5'>
                                {project.technologies.map((tech, index) => (
                                    <Badge key={index} variant='outline'>{tech}</Badge>
                                ))}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects