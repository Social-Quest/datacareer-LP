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
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <Reveal
                    as="h2"
                    className="text-center text-[#091540] font-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] leading-tight mb-8 md:mb-12"
                >
                    <span dangerouslySetInnerHTML={{ __html: headerTitle }} />
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <Reveal
                            key={feature.id}
                            className="group p-6 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-[#7692FF]/30 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
                            delay={idx * 100}
                            variant="fade-up"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-[#091540] mb-4 group-hover:text-[#7692FF] transition-colors">
                                {feature.title}
                            </h3>

                            <button
                                disabled
                                className="mt-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-medium text-gray-400 bg-gray-200 cursor-not-allowed select-none transition-colors border border-gray-300"
                            >
                                Coming Soon
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ComingSoonFeatures
