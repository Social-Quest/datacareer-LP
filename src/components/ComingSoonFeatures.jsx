import React, { useState, useEffect } from 'react'
import Reveal from './Reveal'
import api from '../utils/api'

function ComingSoonFeatures() {
    const [headerTitle, setHeaderTitle] = useState('More Tools <span class="text-[#e9724c]">Coming Soon</span>');

    useEffect(() => {
        const fetchHeaderData = async () => {
            try {
                const response = await api.get('/api/landing-page/coming_soon_header');
                if (response.data && response.data.content && response.data.content.mainTitle) {
                    setHeaderTitle(response.data.content.mainTitle);
                }
            } catch (error) {
                console.error("Coming soon header error:", error);
            }
        };
        fetchHeaderData();
    }, []);

    const features = [
        { title: 'Resume AI', id: 'resume-ai' },
        { title: 'Data Skill Radar', id: 'skill-radar' },
        { title: 'Cover Letter AI', id: 'cover-letter-ai' },
        { title: 'Dataset Marketplace', id: 'dataset-marketplace' },
        { title: 'Interview Prep AI', id: 'interview-prep-ai' },
    ]

    return (
        <section className="w-full bg-white font-roboto">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <Reveal
                    as="h2"
                    className="text-center text-[#091540] font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-tight mb-8 md:mb-12"
                >
                    <span dangerouslySetInnerHTML={{ __html: headerTitle }} />
                </Reveal>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <Reveal
                            key={feature.id}
                            className="group relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] p-8 rounded-3xl border border-gray-100 shadow-md bg-gradient-to-b from-gray-50 to-white hover:to-white hover:border-[#7692FF]/40 hover:shadow-[0_20px_50px_rgba(118,146,255,0.15)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col items-center text-center cursor-pointer"
                            delay={idx * 100}
                            variant="fade-up"
                        >
                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-[#7692FF]/5 rounded-full blur-2xl group-hover:bg-[#7692FF]/10 transition-colors duration-500"></div>

                            <h3 className="text-xl sm:text-2xl font-bold text-[#091540] mb-6 group-hover:text-[#7692FF] transition-colors relative z-10">
                                {feature.title}
                            </h3>

                            <div className="mt-auto relative z-10">
                                <span className="inline-flex items-center justify-center px-8 py-3 rounded-2xl text-sm font-semibold text-gray-500 bg-white border border-gray-100 shadow-sm group-hover:border-[#7692FF]/20 group-hover:shadow-md transition-all duration-300">
                                    <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#7692FF] group-hover:animate-pulse transition-colors"></span>
                                    Coming Soon
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComingSoonFeatures
