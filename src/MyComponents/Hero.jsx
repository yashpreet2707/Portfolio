import Particles from '@/Background/Particles/Particles'
import { RetroGrid } from '@/components/magicui/retro-grid'
import { SpinningText } from '@/components/magicui/spinning-text'
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
        <section id='home'>
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
            {/* <div className='hidden lg:inline-block absolute bottom-10 right-20 z-50'>
                <SpinningText>- - - - - - - - - - - - - - - - - - - - - </SpinningText>
                <Button className='rounded-full py-11 relative bottom-11 bg-gradient-to-r from-blue-500 to-purple-500 text-white' onClick={() => window.location.href = 'mailto:yashpreet1686@gmail.com'}>HIRE ME</Button>
            </div> */}
            <div className='max-w-7xl mx-auto relative'>
                <div className='text-center py-16 mt-16'>
                    <div className='flex flex-col items-center'>
                        <img className='w-22' src='./images/emojiSpecs.png' alt='emoji' />
                        <Button variant='primary' className='text-sm border py-1 px-4 font-semibold'><span className='animate-pulse'>🟢</span>Available for new projects</Button>
                    </div>
                    <h1 className='text-4xl md:text-6xl font-bold my-6'>Hi I'm <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text '>Yashpreet Singh</span></h1>
                    <p className="text-xl text-slate-600 dark:text-slate-200/80 md:text-2xl mb-6">
                        Pre-Final Year CS Student & Full Stack Developer
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-200/80 max-w-2xl mx-auto mb-8 px-2">
                        Passionate about building scalable, high-performance web applications and exploring cloud technologies. Currently pursuing
                        Computer Science with a focus on modern development practices.
                    </p>
                    <div className='flex justify-center items-center flex-wrap gap-2 mb-8'>
                        <Badge variant='secondary' className='px-4 py-2'>
                            <Code2 style={{ width: '1rem', height: '1rem' }} className='mr-2' />
                            Full Stack Development
                        </Badge>
                        <Badge variant='secondary' className='px-4 py-2'>
                            <Cloud style={{ width: '1rem', height: '1rem' }} className='mr-2' />
                            Cloud Technologies
                        </Badge>
                        {/* <Badge variant='secondary' className='px-4 py-2'>
                            <MessageSquareCode style={{ width: '1rem', height: '1rem' }} className='h-4 w-4 mr-2' />
                            DevRel Industry
                        </Badge> */}
                    </div>
                    <div className='flex justify-center space-x-4'>
                        <Button onClick={() => scrollToSection('projects')} className='cursor-pointer bg-green-600 hover:bg-green-700'>
                            <a href="https://drive.google.com/file/d/1HLhkLIQppSwyg0v70O6hTMaNAaHGDfue/view?usp=drive_link" target='__blank'>My Resume</a>
                        </Button>
                        <Button onClick={() => scrollToSection('contact')} className='cursor-pointer'>Get In Touch</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero