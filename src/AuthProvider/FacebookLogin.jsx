const FacebookLogin = () => {

    const handleFacebookLogin = () => {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          // You can access the Facebook user information from the result object
          const user = result.user;
          console.log('Facebook User:', user);
        })
        .catch((error) => {
          // Handle any errors that occur during the Facebook login process
          console.error('Facebook Login Error:', error);
        });
    };
  
    return (
      <button onClick={handleFacebookLogin}>Login with Facebook</button>
    );
  };
  
  export default FacebookLogin;
  