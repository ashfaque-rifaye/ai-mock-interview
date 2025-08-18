import React from 'react'
import { Container } from './container'
import { cn } from '@/lib/utils'
import { LogoContainer } from './logo-container'
import { MainRoutes } from '@/lib/helper'
import { NavLink } from 'react-router-dom'
import { ProfileContainer } from '@/containers/profile-container'
import { ToggleContainer } from '@/containers/toggle-container'
import { useAuth } from '@clerk/clerk-react'

export const Header = () => {

    const { userId } = useAuth();
    return (
        <header className={cn("flex items-center w-full border-b duration-150 transition-all ease-in-out")}>
            {/*Logo and navigation can be added here*/}
            <Container>
                <div className="flex items-center py-4">
                    <LogoContainer />
                    <nav className="hidden md:flex item-center gap-3 px-4">
                        <ul className="flex items-center gap-6">
                            {MainRoutes.map((route) => (
                                <NavLink key={route.href} to={route.href} className={({ isActive }) => (isActive ? cn("text-neutral-900 font-semibold") : cn("text-neutral-600"))}>
                                    {route.label}
                                </NavLink>)
                            )}
                            {userId && (<NavLink to="/generate" className={({ isActive }) => (isActive ? cn("text-neutral-900 font-semibold") : cn("text-neutral-600"))}>
                                Take an Interview
                            </NavLink>)
                            }
                        </ul>
                    </nav>
                </div>
            </Container>

            {/* Profile section */}
            <div className="flex items-center justify-end p-4">
                <ProfileContainer />
                {/* Toggle Action */}
                <ToggleContainer />
            </div>
        </header>
    )
}

export default Header;
