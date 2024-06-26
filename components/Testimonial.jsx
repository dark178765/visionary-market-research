'use client'
import React, { Component, useEffect, useState, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';


export default function Testimonial() {

    const [my_swiper, set_my_swiper] = useState({});
    const swiper = useSwiper();

    const [selectedTestimonial, setSelectedTestimonial] = useState(0);

    const testimonials = [
        { designation: 'Marketing Manager', company: 'Nestle SA', testimonialHeading: 'Critical Insights that had a transformative impact', testimonial: 'Visionary Market Insights provided invaluable market data that influenced our product strategies. Their accurate research helped increase our repeat customer rate by 15%, resulting in a notable revenue growth.', name: 'Name', selected: selectedTestimonial === 0 },
        { designation: 'Operations Director', company: 'VMware Inc.', testimonialHeading: 'Helped us Reach New Customers', testimonial: 'Visionary Market Insights\' precise data on client demographics enhanced our targeting strategy, leading to a significant increase in new users per week. Their insights directly impacted our market penetration.', name: 'Name', selected: selectedTestimonial === 1 },
        { designation: 'Business Development Lead', company: 'Randstad NV', testimonialHeading: 'Significant aid in formulating our expansion strategy', testimonial: 'Visionary Market Insights provided us with essential market analytics. Their insights into emerging markets guided our expansion strategy, resulting in a successful penetration and a vast increase in our client base.', name: 'Name', selected: selectedTestimonial === 2 },
    ]

    const changeSlider = (index) => {
        setSelectedTestimonial(index);
        my_swiper.slideTo(index);
    }

    return (
        <div className='py-6 mx-auto max-w-7xl md:pt-10 sm:px-6'>
            {/* <div className='mb-4 text-3xl font-extrabold text-center text-cyan-950'>Testimonials</div> */}
            <h2 className="mb-6 text-3xl font-extrabold text-center text-cyan-950 custom-underline">Testimonials</h2>
            <div className="items-center justify-center md:flex">


                <motion.div
                    className='flex gap-2 mx-4 my-8 md:w-1/3 md:block md:m-4'
                    initial={{ opacity: 0, y: '-25%' }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >

                    {testimonials.map((testimonial, index) =>
                        <div key={index} onClick={() => { changeSlider(index) }} className={`flex items-center gap-4 mb-4 duration-500 border border-b-4 rounded-md shadow-sm hover:shadow-xl cursor-pointer ${testimonial.selected && 'border-b-cyan-800'}`}>
                            {/* <div className="rounded-full h-14 w-14 bg-slate-300"></div> */}
                            <div className='mx-4 my-2 text-[8px] md:text-[16px]'>
                                <div className='font-bold md:font-normal'>{testimonial.company}</div>
                                <div>{testimonial.designation}</div>
                            </div>
                        </div>
                    )}
                </motion.div>
                <div className='cursor-pointer md:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0, y: '25%' }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >

                        <Swiper
                            onInit={(ev) => {
                                set_my_swiper(ev)
                            }}
                            slidesPerView={1}
                            onSlideChange={(i) => { changeSlider(i.realIndex) }}
                            onSwiper={(swiper) => { }}
                        >

                            {testimonials.map((testimonial, index) =>
                                <SwiperSlide key={index}> <div className="flex flex-col gap-1 m-4 text-center md:text-left">
                                    <div className="text-xl font-bold">{testimonial.testimonialHeading}.</div>
                                    <div className="pb-4 italic">-{testimonial.designation}, {testimonial.company}</div>
                                    <div className='-translate-x-2 -translate-y-2 w-36'>

                                    </div>
                                    <div className='-translate-y-2 md:text-justify'>{testimonial.testimonial}</div>
                                </div></SwiperSlide>
                            )}
                        </Swiper>
                    </motion.div>
                </div>

            </div>
        </div>
    )

}
