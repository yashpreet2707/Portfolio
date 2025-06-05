import { RetroGrid } from '@/components/magicui/retro-grid'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/utils/darkThemeProvider'
import { Cloud, Code2, MessageSquareCode } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const Hero = () => {
    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const { resolvedTheme } = useTheme()

    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <section id='home' className='py-16'>
            <div className="absolute h-[900px] sm:h-[700px] w-full overflow-hidden">
                <RetroGrid />
            </div>
            <div className='max-w-7xl mx-auto relative'>
                <div className='text-center py-20'>
                    <span className='text-sm border py-1 px-4 rounded-full bg-blue-400 text-white font-semibold'>Available for opportunities</span>
                    <h1 className='text-4xl md:text-6xl font-bold my-6'>Hi I'm <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text '>Yashpreet Singh</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-200/80 md:text-2xl mb-6">
                        Pre-Final Year CS Student & Full Stack Developer
                    </p>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
                        Passionate about building scalable, high-performance web applications and exploring cloud technologies. Currently pursuing
                        Computer Science with a focus on modern development practices.
                    </p>
                    <div className='flex justify-center items-center flex-wrap gap-4 mb-8 px-5'>
                        <Badge variant='secondary' className='px-4 py-2'>
                            <Code2 style={{ width: '1rem', height: '1rem' }} className='mr-2' />
                            Full Stack Development
                        </Badge>
                        <Badge variant='secondary' className='px-4 py-2'>
                            <Cloud style={{ width: '1rem', height: '1rem' }} className='mr-2' />
                            Cloud Technologies
                        </Badge>
                        <Badge variant='secondary' className='px-4 py-2'>
                            <MessageSquareCode style={{ width: '1rem', height: '1rem' }} className='h-4 w-4 mr-2' />
                            DevRel Industry
                        </Badge>
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <Button onClick={() => scrollToSection('projects')} className='cursor-pointer bg-green-600 hover:bg-green-700'>View My Work</Button>
                        <Button onClick={() => scrollToSection('contact')} className='cursor-pointer'>Get In Touch</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero