import { SignUp } from '@clerk/clerk-react';
import React from 'react';  

export const SignUpPage = () => { 
    return  <div className='w-screen h-screen overflow-hidden flex items-center justify-center 
    relative'>
        <img src="/images/sign-in-bg.jpg" alt="Sign In Background" 
        className='absolute w-full h-full object-cover' />
            <SignUp path="/sign-up" />
        </div>
}