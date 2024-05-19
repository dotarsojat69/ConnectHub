import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { useLogoutAccount } from "@/lib/react-query/queriesAndMutation";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Button } from "../ui/button";
import Loader from "./Loader";


const Sidebar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { user, isLoading } = useUserContext();

    const { mutate: Logout, isSuccess } = useLogoutAccount();

    useEffect(() => {
        if (isSuccess) navigate(0);
    },[isSuccess])
    
  return (
    <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src="/assets/images/logo.svg" 
                    alt="logo"
                    width={170}
                    height={36}
                />
            </Link>

            {isLoading || !user.email ? (
                <div className="h-14">
                    <Loader />
                </div>
            ) : (
                <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
                    <img src={user.imageUrl}
                    alt="profile"
                    className="h-14 w-14 rounded-full"
                />
                <div>
                <p className="body-bold">
                    {user.name}
                </p>
                <p className="small-regular text-light-3">
                    @{user.username}
                </p>
                </div>
                </Link>
            )}

            <ul className="flex flex-col gap-6">
                {sidebarLinks.map((link: INavLink) => {
                    const isActive = pathname === link.route;


                    return (
                     <li key={link.label}
                     className={`leftsidebar-link group ${
                        isActive && 'bg-purple-500'
                     }`}>
                        <NavLink
                            to={link.route}
                            className="flex gap-2 items-center p-4"
                            
                        >
                            <img 
                                src={link.imgURL} 
                                alt={link.label}
                                className={`group-hover:invert-white
                                ${isActive && 'invert-white'}`}
                            />
                            {link.label}
                        </NavLink>
                        </li>
                    )
                }
                )}
            </ul>
        </div>


        <Button 
        variant="ghost" 
        className="shad-button_ghost" 
        onClick={() => Logout()}>
                    <img src="/assets/icons/logout.svg" alt="logout" />
                    <p className="small-medium lg:base-medium">
                        Logout
                    </p>
                </Button>
    </nav>
  )
}

export default Sidebar
