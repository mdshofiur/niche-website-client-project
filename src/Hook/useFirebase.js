import {useEffect, useState} from 'react'
import initializeAuth from '../Firebase/Firebaseinit'
import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";

initializeAuth()
const auth = getAuth();


const useFirebase = () => {

    const [user,setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, seterror] = useState('');
    const [admin,setadmin] = useState(false)
    


    // Sign Up User

    const registerUser = (name,email,password,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const newUser = {email,displayName:name};
            setuser(newUser);
            saveUser(email,name);
            seterror('');
            history.replace('/');
          })
          .catch((error) => {
            const errorCode = error.code;
            seterror(error.message);
            // ..
          })
          .finally((() => setIsLoading(false)))
      }



      // Log In User  

      const userLogIn = (email, password,location,history)=> {
           
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const destination = location?.state?.from || '/';
            history.replace(destination);
            seterror('');
          })
          .catch((error) => {
            seterror(error.message);
          })
          .finally((() => setIsLoading(false)))
       }

   // Sign Out

      const userSignOut = () => {
        setIsLoading(true)
       signOut(auth).then(() => {
           // Sign-out successful.
         }).catch((error) => {
           // An error happened.
         })
         .finally((() => setIsLoading(false)));
     }


// Observe user

useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth, (user) => {
           if (user) {
             const uid = user.uid;
             setuser(user)
             
           } else {
                 setuser({})
           }
           setIsLoading(false);
         });
        
         return () => unSubcribe;

     },[])


     const saveUser = (email,displayName) => {
      const user = {email,displayName};
       fetch('https://intense-ridge-65532.herokuapp.com/users',{
         method: "POST",
         headers:{ 
           'content-type': 'application/json'
         },
         body: JSON.stringify(user)
       })
      .then()
   }
   

    useEffect(()=>{
          fetch(`https://intense-ridge-65532.herokuapp.com/user/admin/${user.email}`)
          .then(res => res.json())
          .then(data => setadmin(data.admin))
    },[user.email])


     return {
        user,
        admin,
        registerUser,
        userSignOut,
        userLogIn,
        isLoading,
        error,
    }


}




export default useFirebase;