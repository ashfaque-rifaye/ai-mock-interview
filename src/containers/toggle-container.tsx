
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"
import { MainRoutes } from "@/lib/helper"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/clerk-react"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export const ToggleContainer = () => {

    const { userId } = useAuth();
    return (
        <Sheet>
            <SheetTrigger className="block md:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent>
                <nav>
                    <ul className="flex flex-col items-start gap-4 p-4">
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
            </SheetContent>
        </Sheet>
    )
}
