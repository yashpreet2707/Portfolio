import { Code, Database, Globe, User } from 'lucide-react'
import React from 'react'
import { Card, CardContent, } from "@/components/ui/card"
import { Badge } from '@/components/ui/badge';
import Particles from '@/Background/Particles/Particles';

const About = () => {

    const skills = [
        {
            category: 'Frontend',
            items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
            icon: Globe,
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'Next.js', 'MongoDB', 'SQL'],
            icon: Database,
        },
        {
            category: 'Languages',
            items: ['JavaScript', 'C++', 'Java', 'Python'],
            icon: Code,
        }
    ]

    return (
        <section id='about' className='relative'>
            <div className="absolute h-[1000px] sm:h-[700px] w-full overflow-hidden -z-10">
                {/* <RetroGrid /> */}
                <Particles
                    particleColors={['#808080', '#808080']}
                    particleCount={400}
                    particleSpread={8}
                    speed={0.15}
                    particleBaseSize={80}
                    moveParticlesOnHover={false}
                    alphaParticles={false}
                    disableRotation={false}
                />
            </div>
            <div className='max-w-7xl mx-auto py-16'>
                <div className='text-center mb-12 mt-5'>
                    <h2 className='flex justify-center items-center text-3xl md:text-4xl font-bold mb-4'><User style={{ width: "2rem", height: '2rem' }} className='mr-4' />About Me</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>A passionate computer science student with a keen interest in building innovative solutions</p>
                </div>

                <div className='grid md:grid-cols-2 gap-12 items-center text-center md:text-left'>
                    <div className='p-4'>
                        <h3 className='text-2xl mb-4 font-semibold'>Learn More About Me</h3>
                        <div className='text-slate-600 dark:text-slate-200/80 '>
                            <p className='mb-4'>I'm currently in my pre-final year of Computer Science Engineering, where I've developed a strong foundation in programming, algorithms, and system design. My passion lies in full-stack web development and cloud computing.
                            </p>
                            <p className='mb-4 '>
                                I enjoy solving complex problems and building applications that make a difference. Also, I love to  explore new technologies, contributing to open-source projects, or writing technical blogs.
                            </p>
                            <p className='mb-5'>
                                When the screens go dark, you&apos;ll find me grooving to music 🎧, binge-watching movies and web series 🍿, or smashing birdies on the badminton court 🏸.
                                <br />
                                <span>Let&apos;s connect, create, and collaborate! 😊</span>
                            </p>
                        </div>

                        <div className='grid grid-cols-2 gap-6 mr-5'>
                            <div className="text-center p-2 rounded-lg outline">
                                <div className="text-2xl font-bold text-green-600">10+</div>
                                <div className="text-sm ">Projects Completed</div>
                            </div>
                            <div className="text-center p-2 rounded-lg outline">
                                <div className="text-2xl font-bold text-green-600">3+</div>
                                <div className="text-sm ">Years Learning</div>
                            </div>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='grid  gap-6'>
                            {skills.map(((skill => (
                                <Card key={skill.category} className='hover:shadow-lg transition-shadow'>
                                    <CardContent className='px-4'>
                                        <div className='flex items-center mb-4 gap-x-2'>
                                            <div className='p-2 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 mr-3'>
                                                <skill.icon style={{ width: '1.5rem', height: '1.5rem' }} className='text-blue-500' />
                                            </div>
                                            <h4 className='font-semibold text-lg'>{skill.category}</h4>
                                        </div>
                                        <div className='flex flex-wrap gap-2'>
                                            {skill.items.map((item, index) => (
                                                <Badge key={index} variant='secondary' className='text-xs'>
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About