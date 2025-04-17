import { useContext } from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const { openSignIn } = useClerk()
    const { user } = useUser()

    const navigate = useNavigate()

    const { setShowRecruiterLogin } = useContext(AppContext)
    return (
        <div className="shadow py-4">
            <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
                {/* Updated logo section */}
                <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                    <img
                        src={assets.CareerConnect}
                        alt="CareerConnect Logo"
                        className="w-90 h-90 sm:w-86 sm:h-40"
                    />
                </div>

                {/* Conditional rendering for user login state */}
                {user ? (
                    <div className="flex items-center gap-3">
                        <Link to="/applications">Applied Jobs</Link>
                        <p>|</p>
                        <p className="max-sm:hidden">Hi, {`${user.firstName} ${user.lastName}`}</p>
                        <UserButton />
                    </div>
                ) : (
                    <div className="flex gap-4 max-sm:text-xs">
                        <button
                            onClick={() => setShowRecruiterLogin(true)}
                            className="text-gray-600"
                        >
                            Recruiter Login
                        </button>
                        <button
                            onClick={() => openSignIn()}
                            className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
                        >
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};
export default Navbar