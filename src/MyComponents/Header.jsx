import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
        setIsMenuOpen(false)
    }

    return (
        <nav className='fixed top-0 w-full border-b backdrop-blur-md border-slate-200 z-50'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center h-16'>
                    {/* logo */}
                    <div>
                        <span className="text-xl font-bold text-slate-800 dark:text-slate-200">Portfolio</span>
                    </div>

                    {/* navigation links */}
                    <div className='hidden md:flex items-center space-x-8'>
                        <Button variant='ghost' onClick={() => scrollToSection("home")} className='px-4 py-2 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer'>
                            Home
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("about")} className='px-4 py-2 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer'>
                            About
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("experience")} className='px-4 py-2 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer'>
                            Experience
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("projects")} className='px-4 py-2 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer'>
                            Projects
                        </Button>
                        <Button variant='ghost' onClick={() => scrollToSection("blogs")} className='px-4 py-2 text-slate-600 dark:text-slate-200 transition-colors cursor-pointer'>
                            Blogs
                        </Button>
                    </div>

                    {/* mobile view button  */}
                    <div className='md:hidden'>
                        <Button variant='ghost' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header