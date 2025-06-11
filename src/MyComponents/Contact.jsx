import { Mail, MapPin, Phone, Send } from 'lucide-react'
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
import { Button } from '@/components/ui/button'

const Contact = () => {
    return (
        <section id='contact' className='py-16'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-10 mt-5'>
                    <h2 className='flex justify-center items-center mb-4 text-3xl md:text-4xl font-bold'><Mail style={{ width: "2rem", height: '2rem' }} className='mr-4' />Get In Touch</h2>
                    <p className='px-4 mb-4 text-slate-600 dark:text-slate-200/80 text-sm sm:text-lg md:text-xl'>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
                </div>

                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    <div className='mx-5'>
                        <div className='mx-5'>
                            <h3 className='text-2xl font-bold mb-4'>
                                Let's Connect
                            </h3>
                            <p className='text-lg text-slate-600 dark:text-slate-200/80  leading-relaxed mb-4'>
                                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology and development.
                            </p>
                        </div>
                        <div className='space-y-6'>

                            <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border  text-slate-600 dark:text-slate-200/80 ">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Mail className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold  mb-1">Email</h4>
                                    <p className="">yashpreet1686@gmail.com</p>
                                    <p className="text-sm mt-1">Best for detailed discussions</p>
                                </div>
                            </div>
                            <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border text-slate-600 dark:text-slate-200/80">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Phone</h4>
                                    <p className="">+91 9050833611</p>
                                    <p className="text-sm mt-1">Available 9 AM - 6 PM IST</p>
                                </div>
                            </div>

                            <div className="group flex items-center space-x-4 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border  text-slate-600 dark:text-slate-200/80">
                                <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 shadow-sm group-hover:shadow-md transition-shadow">
                                    <MapPin className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-1">Location</h4>
                                    <p>Dehradun, Uttarakhand</p>
                                    <p className="text-sm mt-1">Open to remote opportunities</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='lg:sticky lg:top-8 p-4'>
                        <Card className="shadow-xl border-0 backdrop-blur-sm">
                            <CardHeader className="pb-6">
                                <CardTitle className="text-2xl font-bold flex items-center">
                                    <Send className="mr-3 h-6 w-6" />
                                    Send Me a Message
                                </CardTitle>
                                <p className="text-slate-600 dark:text-slate-200/80">Fill out the form below and I'll get back to you within 24 hours.</p>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </section >
    )
}

export default Contact