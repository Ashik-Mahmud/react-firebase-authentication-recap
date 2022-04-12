import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
const useFirebase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const from = location.state?.from?.pathname || "/";
  const signInWithProvider = (provider) => {
    signInWithPopup(auth, provider)
      .then((res) => {
        toast.success("Logged In successfully done.");
        navigate(from, { replace: true });
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
