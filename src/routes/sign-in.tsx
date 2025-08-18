import { SignIn } from '@clerk/clerk-react';
import React from 'react';  

export const SignInPage = () => { 
    return <div className='w-screen h-screen overflow-hidden flex items-center justify-center 
    relative'>
        <img src="/sign-in-bg.jpg" alt="Sign In Background" 
        className='absolute w-full h-full object-cover' />
            <SignIn path="/sign-in" redirectUrl="/"/>
        </div>
}