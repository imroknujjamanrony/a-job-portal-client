import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div>
      <button onClick={handleSignIn} className="btn">
        Google
      </button>
    </div>
  );
};

export default SocialLogin;
