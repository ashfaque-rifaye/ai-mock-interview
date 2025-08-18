import { LoaderPage } from '@/views/loader-page';
import { useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom';

export const ProtectedLayout = ({children} : {children: React.ReactNode}) => {
    const { isLoaded, isSignedIn } = useAuth();
    console.log("Protected Layout is loaded");

    if(!isLoaded) {
        console.log("Loading auth state...");
        return <LoaderPage />
    }

    if(!isSignedIn) {
      console.log("User not signed In state ... (MainLayout)");
      return <Navigate to={"/sign-in"} replace/>
    }

    
  return children;
}

export default ProtectedLayout;
