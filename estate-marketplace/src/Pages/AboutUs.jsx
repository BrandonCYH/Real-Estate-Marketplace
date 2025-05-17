// import {Card, CardContent} from "@/components/ui/card";
// import {AspectRatio} from "@/components/ui/aspect-ratio";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>

            {/* Hero Section */}
            <section className="bg-gray-600 text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dwell</h1>
                        <p className="text-lg md:text-xl opacity-90">
                            We're revolutionizing the way people buy, sell, and rent real estate by combining technology
                            with personalized service.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-black mb-4">Our Story</h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Founded in 2023, Dwell was born from the belief that finding your perfect home
                                    shouldn't be complicated or stressful. Our founders, experienced in both real estate
                                    and technology, set out to create a platform that would simplify the process while
                                    providing all the necessary tools and insights.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    What started as a small team with big ideas has grown into a comprehensive real
                                    estate marketplace trusted by thousands of buyers, sellers, and agents across the
                                    country. Our mission remains the same: to make real estate accessible, transparent,
                                    and enjoyable for everyone involved.
                                </p>
                            </div>

                            <div className="order-first md:order-last">
                                <div className="rounded-lg overflow-hidden shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                                        alt="Modern living room with large windows"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-black mb-4">Our Values</h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div
                                className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div
                                    className="flex items-center justify-center w-24 h-24 rounded-full text-blue-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-2">Trust & Transparency</h3>
                                <p className="text-sm text-gray-600">
                                    We believe in complete honesty and openness in all our dealings, providing accurate
                                    information to help you make informed decisions.
                                </p>
                            </div>

                            <div
                                className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div
                                    className="flex items-center justify-center w-24 h-24 rounded-full text-green-600 mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-2">Innovation</h3>
                                <p className="text-sm text-gray-600">
                                    We continuously strive to improve our platform and services, embracing new*
                                    technologies to create better experiences for our users.
                                </p>
                            </div>

                            <div
                                className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div
                                    className="flex items-center justify-center w-24 h-24 rounded-full text-black mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-12 w-12"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black mb-2">Community</h3>
                                <p className="text-sm text-gray-600">
                                    We value the relationships we build with our users, partners, and the
                                    communities we serve, working together to create better living spaces.
                                </p>
                            </div>


                            {/*<Card>*/}
                            {/*    <CardContent className="pt-6">*/}
                            {/*        <div*/}
                            {/*            className="bg-real-navy bg-opacity-10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">*/}
                            {/*            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-real-navy"*/}
                            {/*                 fill="none" viewBox="0 0 24 24" stroke="currentColor">*/}
                            {/*                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}*/}
                            {/*                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>*/}
                            {/*            </svg>*/}
                            {/*        </div>*/}
                            {/*        <h3 className="text-xl font-semibold text-center mb-4">Community</h3>*/}
                            {/*        <p className="text-gray-600 text-center">*/}
                            {/*            We value the relationships we build with our users, partners, and the*/}
                            {/*            communities we serve, working together to create better living spaces.*/}
                            {/*        </p>*/}
                            {/*    </CardContent>*/}
                            {/*</Card>*/}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */
            }
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-black mb-4">Our Leadership Team</h2>
                            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    name: "CHENG YANG HO",
                                    title: "Chief Executive Officer",
                                    image: "https://i.pravatar.cc/300?img=1",
                                },
                                {
                                    name: "Michael Williams",
                                    title: "Chief Technology Officer",
                                    image: "https://i.pravatar.cc/300?img=8",
                                },
                                {
                                    name: "Emily Davis",
                                    title: "Chief Operating Officer",
                                    image: "https://i.pravatar.cc/300?img=5",
                                },
                                {
                                    name: "Emily Davis",
                                    title: "Chief Operating Officer",
                                    image: "https://i.pravatar.cc/300?img=5",
                                }
                            ].map((member, index) => (
                                <div key={index} className="text-center">
                                    <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-6">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1 text-black">{member.name}</h3>
                                    <p className="text-gray-600">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */
            }
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
                        <p className="text-lg text-gray-700 mb-10">
                            Have questions or want to learn more about Dwell? We'd love to hear from you.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div
                                    className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-black">Phone</h3>
                                <p className="text-gray-600">(123) 456-7890</p>
                            </div>

                            <div>
                                <div
                                    className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-black">Email</h3>
                                <p className="text-gray-600">info@dwellrealestate.com</p>
                            </div>

                            <div>
                                <div
                                    className="bg-white rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium mb-2 text-black">Address</h3>
                                <p className="text-gray-600">123 Main Street<br/>San Francisco, CA 94105</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )

};

export default AboutUs;