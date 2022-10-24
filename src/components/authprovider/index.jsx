import SignIn from "../../pages/signin";

const AuthProvider = (props) => {
  const isAuthenticated = true;

  return isAuthenticated ? props.children : <SignIn />;
};

export default AuthProvider;
