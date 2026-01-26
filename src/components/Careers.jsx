import React from 'react'

const Careers = () => {
    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-20 font-inter text-[#0C153E]">
                <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-semibold leading-tight text-center mb-12">
                    Careers <span className="text-green-600 text-base align-middle ml-2 font-medium bg-green-100 px-3 py-1 rounded-full">🟢 2 Openings</span>
                </h1>

                <div className="space-y-12">
                    {/* Job 1 */}
                    <div className="border border-gray-200 rounded-2xl p-6 md:p-8 transition-shadow duration-300">
                        <h2 className="text-[24px] font-bold text-blue-600 mb-6">
                            1) Data Quality & Insights Analyst
                            <span className="block text-sm font-normal text-gray-500 mt-2">Internship (Unpaid)</span>
                        </h2>

                        <div className="bg-gray-50 p-4 rounded-xl mb-6 text-[14px] leading-6 space-y-2 border border-gray-100">
                            <h3 className="font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-3">Internship Information</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                <li><span className="font-medium text-gray-700">Headquarters:</span> Sydney, NSW</li>
                                <li><span className="font-medium text-gray-700">Job Location:</span> Remote</li>
                                <li><span className="font-medium text-gray-700">Type:</span> Internship (unpaid)</li>
                                <li><span className="font-medium text-gray-700">Duration:</span> 3 Months (can be extended)</li>
                                <li className="sm:col-span-2"><span className="font-medium text-gray-700">Reporting:</span> Data Analytics Manager</li>
                            </ul>
                        </div>

                        <div className="space-y-6 text-[15px] leading-7 text-gray-700">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">About DataCareer.app</h3>
                                <p>The DataCareer.app is a cutting-edge platform that provides real-time data analysis and insights for various industries, helping companies and individuals navigate the evolving job market. We focus on providing actionable data that helps businesses make informed hiring decisions and professionals stay ahead of industry trends.</p>
                                <p className="mt-2 text-sm text-gray-500">Please visit for more information: <a href="http://www.datacareer.app" className="text-blue-600 hover:underline">www.datacareer.app</a></p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Role Overview</h3>
                                <p>We are seeking a Data Quality and Insights Intern (unpaid) to join our dynamic team. In this role, you will be responsible for ensuring the quality and reliability of our job database and extracting actionable insights from the data. This is a unique opportunity to gain hands-on experience with industry-leading tools like Power BI and Google Cloud Platform (GCP), while contributing to a fast-growing data-driven platform.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Key Responsibilities</h3>

                                <h4 className="font-semibold text-gray-900 mt-3 mb-1">Data Quality Monitoring:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Develop and Maintain Data Quality Dashboard:</strong> Build a robust data quality monitoring system using Power BI and GCP SQL to track the health of our job database.</li>
                                    <li><strong>Implement Data Quality Rules:</strong> Define and implement data quality rules (e.g., missing data, duplicates, inconsistencies) to ensure the accuracy and completeness of the database.</li>
                                    <li><strong>Regular Monitoring:</strong> Set up automated reporting and flagging systems to identify and address data quality issues in real-time.</li>
                                    <li><strong>KPI Reporting:</strong> Track and report on key data quality metrics, such as data completeness, timeliness, accuracy, and consistency.</li>
                                </ul>

                                <h4 className="font-semibold text-gray-900 mt-4 mb-1">Data Insights and Analytics:</h4>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Trend Analysis:</strong> Analyse the job market data to identify emerging trends in tools, skills, industries, and job functions. Examples include:
                                        <ul className="list-circle pl-5 mt-1 space-y-1 text-sm">
                                            <li>Which tools or technologies are most frequently required (e.g., Power BI, Python, SQL)?</li>
                                            <li>Which companies and industries are hiring the most? (e.g., Healthcare, travel, BFSI etc)</li>
                                            <li>What kind of roles (entry-level, mid-level, senior-level) are in demand?</li>
                                        </ul>
                                    </li>
                                    <li><strong>Detailed Insights:</strong> Provide insights into specific hiring patterns, such as which skills are most in-demand for data engineers, data analysts, etc., and which domains or industries are seeing the most growth.</li>
                                    <li><strong>KPI Dashboard:</strong> Develop a high-level KPI dashboard summarising key findings, which will help leadership and stakeholders make data-driven decisions.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Collaboration & Reporting</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Work with Data Teams:</strong> Collaborate with data engineers, product managers, and other stakeholders to improve data collection, storage, and reporting processes.</li>
                                    <li><strong>Regular Reporting:</strong> Present findings and insights in regular reports and presentations to management and other stakeholders.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Qualifications</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Currently pursuing or recently completed a degree in Data Science, Computer Science, Information Systems, or a related field.</li>
                                    <li>Experience with Power BI or other data visualisation tools.</li>
                                    <li>Familiarity with SQL (preferably GCP SQL/ BigQuery) and the ability to write complex queries.</li>
                                    <li><strong>Strong Analytical Skills:</strong> Ability to analyse large datasets and extract meaningful insights.</li>
                                    <li><strong>Attention to Detail:</strong> A keen eye for identifying data quality issues and ensuring consistency.</li>
                                    <li><strong>Familiarity with Data Quality Concepts:</strong> Understanding of common data quality issues and how to address them (e.g., missing values, duplicates).</li>
                                    <li><strong>Strong Communication Skills:</strong> Ability to present data findings to both technical and non-technical audiences.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Additional Skills (Preferred)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Experience with Google Cloud Platform (GCP), particularly BigQuery.</li>
                                    <li>Knowledge of Python or R for data analysis.</li>
                                    <li>Experience with other data visualisation tools (e.g., Tableau, Looker).</li>
                                    <li>Previous experience working with job market data or a similar domain.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">What We Offer</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Hands-on experience with data quality and analytics tools.</li>
                                    <li>Mentorship and guidance from experienced professionals.</li>
                                    <li>Opportunity to work with real-world data and contribute to a fast-growing platform.</li>
                                    <li>Flexible work hours and remote working opportunities.</li>
                                    <li>Potential for full-time employment after successful completion of the internship.</li>
                                </ul>
                            </div>

                            <div className="mt-8 bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-lg text-blue-900 mb-2">How to Apply</h3>
                                <p className="text-blue-800">
                                    Please submit your resume, a brief cover letter, and any relevant project samples (if available) to <a href="mailto:info@datacareer.app" className="font-semibold underline hover:text-blue-600">info@datacareer.app</a> with the subject line "Data Quality and Insights Intern Application – [Your Name]".
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Job 2 */}
                    <div className="border border-gray-200 rounded-2xl p-6 md:p-8 transition-shadow duration-300">
                        <h2 className="text-[24px] font-bold text-blue-600 mb-6">
                            2) AI Engineer (with web development experience)
                        </h2>

                        <div className="space-y-6 text-[15px] leading-7 text-gray-700">
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">About datacareer.app</h3>
                                <p>The datacareer.app is an innovative startup operating within the Edtech and SaaS sector in Australia, which was launched as an internal venture by TDAI.</p>
                                <p className="mt-2">Our mission is to revolutionize the job search process by accelerating the rate at which job seekers can discover and apply for positions. With advanced technology, we offer solutions like smart job boards and interview preparation tools to make the job hunting process 10x faster and more efficient.</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">3 Core MVP Features</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Smart job board - access to a curated list of data jobs with smart filters</li>
                                    <li>Interview prep platform - SQL & data task interview practice exercise</li>
                                    <li>Data marketplace - access to live & real data for building your portfolio</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Responsibilities</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Design, develop, and maintain a full-stack web-based SaaS application with a focus on user-friendly design and robust functionality</li>
                                    <li>Build and implement data pipelines and ingest data from web scraping tools (e.g. Bright Data)</li>
                                    <li>Develop AI-driven systems (using OpenAI or Claude APIs) and algorithms to improve job matching and recommendation processes on our platform.</li>
                                    <li>Well-versed or willing to learn AI prompt engineering techniques</li>
                                    <li>Collaborate with cross-functional teams to integrate new technologies and approaches into the existing system.</li>
                                    <li>Ensure the performance, quality, and responsiveness of applications</li>
                                    <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Objective & Key Results (OKR)</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Build an MVP tool using Bubble with 1 core feature in the first 3 months</li>
                                    <li>Set up data pipeline from the preferred web scraping tool into a cloud storage</li>
                                    <li>Implement at least 5 GenAI LLM-driven data labeling/annotation fields</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Preferred Qualifications and Skills</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Proven experience as a Full Stack Developer with expertise in both front-end and back-end technologies.</li>
                                    <li>Knowledge of low-code web development tools such as Bubble, Webflow etc</li>
                                    <li>Strong proficiency in JavaScript frameworks (React, Node.js), Python, SQL, and familiarity with Bubble and Bright Data.</li>
                                    <li>Experience in building AI models and handling large-scale data processing</li>
                                    <li>Knowledge of web scraping technologies and data pipeline construction</li>
                                    <li>Excellent problem-solving skills and ability to work in a fast-paced startup environment.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">What We Offer</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>A dynamic and challenging work environment in a rapidly growing startup</li>
                                    <li>Opportunities for professional growth and advancement.</li>
                                    <li>Access to the latest tools and technologies.</li>
                                    <li>Flexible work hours and a supportive team atmosphere.</li>
                                </ul>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                <p className="text-gray-900 font-medium mb-2">Join datacareer.app and be a part of a team that is dedicated to making job searching a breeze for users.</p>
                                <p className="mt-2 text-sm text-gray-500">Apply today to contribute to the future of Edtech and help reshape how professionals engage with the job market!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Careers
