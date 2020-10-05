import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "fBase";
import AuthForm from "components/AuthForm";

const Auth = () => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;

    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    await authService.signInWithPopup(provider);
  };

  return (
    <div className="authContainer">
      <FontAwesomeIcon
        icon={faTwitter}
        color={"#04AAFF"}
        size="3x"
        style={{ marginBottom: 30 }}
      />
      <AuthForm /> <AuthForm />
      <div>
        <div className="authBtns">
          <button onClick={onSocialClick} name="google">
            <button onClick={onSocialClick} name="google" className="authBtn">
              Continue with Google Continue with Google
              <FontAwesomeIcon icon={faGoogle} />
            </button>
          </button>
          <button onClick={onSocialClick} name="github">
            <button onClick={onSocialClick} name="github" className="authBtn">
              Continue with Github Continue with Github
              <FontAwesomeIcon icon={faGithub} />
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Auth;
