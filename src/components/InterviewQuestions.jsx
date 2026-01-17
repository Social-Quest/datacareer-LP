import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInterviewQuestionsHeader } from "../store/slices/interviewQuestionsSlice";
import Reveal from "./Reveal";
import BHPLogo from "../assets/BHP Group.png";
import TelstraLogo from "../assets/Telstra.png";
import WoolworthsLogo from "../assets/Woolworths.png";
import CommBankLogo from "../assets/CommBank.png";
import { LOGIN_URL } from "../config/env";

function InterviewQuestions() {
    const dispatch = useDispatch();
    const { header } = useSelector((state) => state.interviewQuestions);

    useEffect(() => {
        dispatch(fetchInterviewQuestionsHeader());
    }, [dispatch]);

    const handleQuestionClick = () => {
        if (LOGIN_URL) {
            window.location.href = LOGIN_URL;
        }
    };

    const questions = [
        // Beginner Level Questions
        {
            company: "Woolworths",
            logo: WoolworthsLogo,
            title: "Redeemed Points Analysis",
            difficulty: "Beginner",
            difficultyColor: "bg-green-100 text-green-800"
        },
        {
            company: "Woolworths",
            logo: WoolworthsLogo,
            title: "Best & Worst Performing Stores",
            difficulty: "Beginner",
            difficultyColor: "bg-green-100 text-green-800"
        },
        {
            company: "CommBank",
            logo: CommBankLogo,
            title: "Weekend vs Weekday Spending Patterns",
            difficulty: "Beginner",
            difficultyColor: "bg-green-100 text-green-800"
        },
        {
            company: "Telstra",
            logo: TelstraLogo,
            title: "High-Traffic Network Asset",
            difficulty: "Beginner",
            difficultyColor: "bg-green-100 text-green-800"
        },
        {
            company: "BHP Group",
            logo: BHPLogo,
            title: "High-Compliance Mining Workforce",
            difficulty: "Beginner",
            difficultyColor: "bg-green-100 text-green-800"
        },

        // Intermediate Level Questions
        {
            company: "CommBank",
            logo: CommBankLogo,
            title: "Age-based Financial Behaviour",
            difficulty: "Intermediate",
            difficultyColor: "bg-yellow-100 text-yellow-800"
        },
        {
            company: "Telstra",
            logo: TelstraLogo,
            title: "Highly Congested Network Assets",
            difficulty: "Intermediate",
            difficultyColor: "bg-yellow-100 text-yellow-800"
        },
        {
            company: "BHP Group",
            logo: BHPLogo,
            title: "Top Performing Employees",
            difficulty: "Intermediate",
            difficultyColor: "bg-yellow-100 text-yellow-800"
        },

        // Advanced Level Questions
        {
            company: "Woolworths",
            logo: WoolworthsLogo,
            title: "Loyalty Trends Over Time",
            difficulty: "Advanced",
            difficultyColor: "bg-red-100 text-red-800"
        },
        {
            company: "CommBank",
            logo: CommBankLogo,
            title: "Account Dormancy Risk Assessment",
            difficulty: "Advanced",
            difficultyColor: "bg-red-100 text-red-800"
        },
        {
            company: "Telstra",
            logo: TelstraLogo,
            title: "Latency vs Packet Loss Correlation",
            difficulty: "Advanced",
            difficultyColor: "bg-red-100 text-red-800"
        },
        {
            company: "BHP Group",
            logo: BHPLogo,
            title: "Effectiveness of Safety Training",
            difficulty: "Advanced",
            difficultyColor: "bg-red-100 text-red-800"
        }
    ];

    return (
        <section id="simulations" className="w-full bg-white py-12 md:py-20 overflow-hidden">
            <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
                {header && (
                    <div className="text-center mb-12">
                        <Reveal as="h2" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" variant="fade-up">
                            {header.title}
                        </Reveal>
                        <Reveal as="p" className="text-lg text-gray-600 mb-2" delay={100} variant="fade-up">
                            {header.subtitle}
                        </Reveal>
                        <Reveal as="p" className="text-sm text-gray-500" delay={200} variant="fade-up">
                            {header.description}
                        </Reveal>
                    </div>
                )}

                {/* Desktop Table View */}
                <div className="hidden md:block overflow-x-auto overflow-y-hidden">
                    <Reveal variant="fade-up" delay={150}>
                        <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                            <thead className="bg-[#f8f9fb] border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-inter">
                                        Company
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-inter">
                                        Title
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-inter">
                                        Difficulty
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {questions.map((question, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-gray-50 transition-colors cursor-pointer group"
                                        onClick={handleQuestionClick}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img
                                                    src={question.logo}
                                                    alt={question.company}
                                                    className="h-8 w-8 rounded-full mr-3 object-contain border border-gray-100 bg-white"
                                                />
                                                <span className="text-sm font-medium text-gray-900 font-inter">
                                                    {question.company}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="text-sm text-gray-900 font-inter group-hover:text-blue-600 transition-colors">
                                                {question.title}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full font-inter ${question.difficultyColor}`}>
                                                {question.difficulty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Reveal>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-4">
                    {questions.map((question, index) => (
                        <Reveal
                            key={index}
                            variant="fade-up"
                            delay={index * 50}
                            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 cursor-pointer hover:shadow-md transition-shadow active:scale-[0.99] transition-transform"
                            onClick={handleQuestionClick}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center">
                                        <img
                                            src={question.logo}
                                            alt={question.company}
                                            className="h-10 w-10 rounded-full mr-3 object-contain border border-gray-100 bg-white"
                                        />
                                        <span className="text-sm font-semibold text-gray-900 font-inter">
                                            {question.company}
                                        </span>
                                    </div>
                                    <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full font-inter ${question.difficultyColor}`}>
                                        {question.difficulty}
                                    </span>
                                </div>
                                <h3 className="text-sm text-gray-700 font-medium font-inter">
                                    {question.title}
                                </h3>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InterviewQuestions;
