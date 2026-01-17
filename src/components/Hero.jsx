import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchSubHero } from "../store/slices/subHeroSlice";
import { REGISTER_URL } from "../config/env";
import Reveal from "./Reveal";

function Hero() {
    const dispatch = useDispatch();
    const { header } = useSelector((state) => state.subHero);

    useEffect(() => {
        dispatch(fetchSubHero());
    }, [dispatch]);

    const scrollToSimulations = () => {
        const element = document.getElementById('simulations');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    if (!header) return null;

    return (
        <div className="bg-gradient-to-r from-[#3D518C] to-[#7692FF] text-white w-full">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
                <Reveal as="h1" className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" variant="fade-up">
                    {header.title}
                </Reveal>
                <Reveal as="p" className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" delay={100} variant="fade-up">
                    {header.subtitle}
                </Reveal>
                <Reveal className="flex flex-col sm:flex-row gap-4 justify-center" delay={200} variant="fade-up">
                    {REGISTER_URL && (
                        <Link to={REGISTER_URL} className="px-6 py-3 bg-[#e9724c] text-white rounded-lg hover:bg-[#c45e41] transition font-semibold">
                            Start Learning Free
                        </Link>
                    )}
                    <button
                        onClick={scrollToSimulations}
                        className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition font-semibold"
                    >
                        View Challenges
                    </button>
                </Reveal>
            </div>
        </div>
    );
}

export default Hero;
