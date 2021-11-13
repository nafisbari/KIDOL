import { useEffect, useState } from "react";
import initializeFirebaseApp from '../Pages/Login/Firebase/firebase.init'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import axios from "axios";


initializeFirebaseApp()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false)

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //register
    const registerUser = (email, password, location, history, name) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                setAuthError('');

                //save user to the database
                savedUser(email, name)

                const user = userCredential.user;

                await updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!

                }).catch((error) => {
                    // An error occurred
                    // ...
                });

                console.log(user);

                const destination = location?.state?.from || '/';
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
                const destination = location?.state?.from || '/';
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
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                savedGoodleUser(user.email, user.displayName)
                //redirect suer
                const destination = location?.state?.from || '/';
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

    useEffect(() => {
        fetch(`https://young-mesa-35196.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [user.email])

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

    const savedUser = (email, displayName) => {
        const user = { email, displayName };
        axios.post('https://young-mesa-35196.herokuapp.com/users', user)
            .then((result) => {
                console.log(result)
            })
    }

    const savedGoodleUser = (email, displayName) => {
        const user = { email, displayName };
        axios.put('https://young-mesa-35196.herokuapp.com/users', user)
            .then((res) => {
                console.log(res)
            })
    }

    return {
        registerUser,
        logout,
        user,
        authError,
        googleSignIn,
        loginUser,
        isLoading,
        admin

    };
};

export default useFirebase;