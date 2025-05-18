import {Link} from "react-router-dom";
import {Lock, Mail} from "lucide-react";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="container max-w-lg mx-auto flex flex-1 flex-col items-center justify-center px-6">
                <div className="w-full bg-white rounded-lg shadow-md p-6 sm:p-8">
                    <div className="flex flex-col space-y-2 text-center mb-6">
                        <h1 className="text-2xl font-bold text-real-navy">Welcome Back</h1>
                        <p className="text-gray-500">Sign in to your Dwell account</p>
                    </div>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <h1>Email</h1>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
                                <input
                                    id="email"
                                    placeholder="your@email.com"
                                    type="email"
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label>Password</label>
                                <a href="#" className="text-sm font-medium text-real-blue hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"/>
                                <input
                                    id="password"
                                    placeholder="••••••••"
                                    type="password"
                                    className="pl-10"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-real-navy hover:bg-opacity-90"
                        >
                        </button>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                {/*<Separator className="w-full"/>*/}
                            </div>
                            <div className="relative flex justify-center text-xs">
                                <span className="bg-white px-2 text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-4">
                            <button type="button" variant="outline" className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                     className="w-5 h-5">
                                    <path fill="currentColor"
                                          d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"/>
                                    <path fill="#EA4335"
                                          d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"/>
                                    <path fill="#34A853"
                                          d="M5.26499 14.2949C5.02499 13.5699 4.88499 12.7999 4.88499 11.9999C4.88499 11.1999 5.01999 10.4299 5.26499 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26499 14.2949Z"/>
                                    <path fill="#FBBC05"
                                          d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.295L1.2754 17.39C3.2504 21.31 7.3104 24 12.0004 24Z"/>
                                </svg>
                                Google
                            </button>
                            <button type="button" variant="outline" className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                     className="w-5 h-5">
                                    <path fill="currentColor"
                                          d="M16.6725 2.8123C17.7367 1.56656 18.1094 0.77907 18.1094 0.77907C18.1094 0.77907 16.9059 0.867188 15.7242 2.07422C14.6094 3.2123 14.0964 4.26563 14.0964 4.26563C14.0964 4.26563 14.5669 3.53126 16.6725 2.8123Z"/>
                                    <path fill="currentColor"
                                          d="M22.5677 16.896C22.5677 16.896 19.9833 22.6482 14.6958 22.6482C12.2036 22.6482 10.4739 21.2646 9.27148 21.2646C8.02836 21.2646 6.19898 22.6001 4.40086 22.6001C-0.368359 22.6001 -0.000195313 13.2801 -0.000195313 13.2801C-0.000195313 8.89865 3.2208 6.89083 3.2208 6.89083C5.10516 5.14708 7.45164 5.33013 7.45164 5.33013C9.4358 5.33013 10.8159 6.65622 11.9987 6.65622C13.1354 6.65622 14.7815 5.34377 17.0004 5.34377C17.0004 5.34377 19.6431 5.30383 21.4671 7.73432C21.4671 7.73432 18.157 9.84962 18.157 13.1838C18.157 16.9058 22.5677 16.896 22.5677 16.896Z"/>
                                </svg>
                                Apple
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 text-center text-sm">
                        <span className="text-gray-500">Don't have an account?</span>{" "}
                        <Link to="/register" className="font-medium text-real-navy hover:underline">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;