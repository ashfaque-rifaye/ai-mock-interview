import { Button } from '@/components/ui/button'
import { useAuth, UserButton } from '@clerk/clerk-react'
import { Loader }  from 'lucide-react'
import { Link } from 'react-router-dom'

export const ProfileContainer = () => {

    const {isSignedIn,isLoaded} = useAuth()
    console.log("Start of the Component:", isSignedIn, isLoaded)
    if(!isLoaded) {
        return (<div className="flex items-center">
            <Loader className="animate-spin h-6 w-6 text-emerald-500" />
        </div>);
    }
  // Log inside the component before returning JSX
  console.log("Inside Profile Component", isSignedIn, isLoaded);
  return (  
    <div className="flex items-center gap-2">
        {isSignedIn ? 
            (<UserButton afterSignOutUrl='/sign-in'/> ) 
            : (<>
                <Link to="/sign-in" className="hover:underline ml-4">
                    <Button size="sm" variant="outline">
                        Sign In
                    </Button>
                </Link>
                <Link to="/sign-up" className="text-blue-500 hover:underline ml-4">
                    <Button size="sm">
                        Get Started
                    </Button>
                </Link>
            </>)
        }        
        </div>
  );
};
