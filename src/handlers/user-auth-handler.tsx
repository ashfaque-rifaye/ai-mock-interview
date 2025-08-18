import { db } from '@/config/firebase.config';
import type { User } from '@/types';
import { LoaderPage } from '@/views/loader-page';
import { useAuth, useUser } from '@clerk/clerk-react';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const AuthHandler = () => {
    const isSignedIn = useAuth();
    const { user } = useUser();

    console.log("User Auth Handler:", isSignedIn, user);
    const pathname = useLocation().pathname;
    const navigateTo = useNavigate();

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        const storeUserData = async () => {
            if (isSignedIn && user) {
                // Store user data in local storage or state management 
                try {
                    // Fetch user data from Firestore
                    const userSnap = await getDoc(doc(db, "users", user.id));
                    if (userSnap.exists()) {
                        console.log("User Data:", userSnap.data());
                        // Store user data in local storage or state management
                        // localStorage.setItem('userData', JSON.stringify(userData));
                    } else {
                        const newUser: User = {
                            id: user.id,
                            name: user.fullName || user.firstName || user.lastName || 'Unknown',
                            email: user.primaryEmailAddress?.emailAddress || '',
                            profilePicture: user.imageUrl || '',
                            imageUrl: user.imageUrl || '',
                            createdAt: serverTimestamp(),
                            updatedAt: serverTimestamp(),
                        }

                        // Store new user data in Firestore
                        await setDoc(doc(db, "users", user.id), newUser);
                        console.log("New User, creating document in Firestore");
                    }
                } catch (error) {
                    console.error("Error storing user data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        storeUserData();

    },
    [pathname, isSignedIn, user, navigateTo]);

    if (loading) {
        return (
            <LoaderPage />
        )
    }
    return null;
}

export default AuthHandler;


