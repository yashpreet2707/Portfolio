import { Mail } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section id='contact' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-2 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><Mail style={{ width: "2rem", height: '2rem' }} className='mr-4' />Get In Touch</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
                </div>
            </div>
        </section>
    )
}

export default Contact