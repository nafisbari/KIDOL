import { useEffect, useState } from "react";
import initializeFirebaseApp from '../Pages/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeFirebaseApp()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //register
    const registerUser = (email, password, location, history, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                setAuthError('');

                const user = userCredential.user;

                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                console.log(user);

                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);


            })
            .catch((error) => {

                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));

    }

    //login user

    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                //redirecting to the original place jekhane jete chaisilam
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);

                // Signed in 
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Google Sign in
    const googleSignIn = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                //redirect suer
                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);

                //error
                setAuthError('');


            }).catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    //onauthstatechange observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties


                setUser(user)
                // ...
            } else {
                // User is signed out

                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])

    //signout
    const logout = () => {
        setIsLoading(true)
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        }).catch((error) => {
            // An error happened.
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }


    return {
        registerUser,
        logout,
        user,
        authError,
        googleSignIn,
        loginUser,
        isLoading
    };
};

export default useFirebase;