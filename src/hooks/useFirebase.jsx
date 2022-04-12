import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
const useFirebase = () => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});

  const signInWithProvider = (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("Logged In successfully done.");
        navigate("/hotels");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      user?.uid ? setIsAuth(true) : setIsAuth(false);
    });
  }, []);

  return { signInWithProvider, user, isAuth, setIsAuth };
};
export default useFirebase;
