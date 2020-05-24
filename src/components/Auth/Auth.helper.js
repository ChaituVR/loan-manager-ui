import * as firebaseui from 'firebaseui';
import firebase from '../../config/firebaseConfig';
import Axios from 'axios';
import { routes } from '../../config';

export const checkLogin = (loggedInCallBack, errorCallback) => {
  firebase.auth().onAuthStateChanged(async (user) => {
    if (user){
      const {
        displayName,
        email,
        emailVerified,
        photoURL,
        uid,
        phoneNumber,
        providerData,
      } = user;
      
      let newUserObject = {
        displayName,
        email,
        emailVerified,
        photoURL,
        uid,
        phoneNumber,
        providerData,
        providerEmail: providerData[0].email
      };
      // https://blog.hasura.io/authentication-and-authorization-using-hasura-and-firebase/
      const accessToken = await user.getIdToken();
      const idTokenResult = await user.getIdTokenResult();
      const hasuraClaim =
        idTokenResult.claims['https://hasura.io/jwt/claims'];

      if (hasuraClaim) {
        newUserObject.accessToken = accessToken;
        loggedInCallBack(newUserObject);
      } else {
        // Check if refresh is required.
        const metadataRef = firebase.database()
          .ref('metadata/' + user.uid + '/refreshTime');

        metadataRef.on('value', async () => {
          // Force refresh to pick up the latest custom claims changes.
          const accessToken = await user.getIdToken(true);
          newUserObject.accessToken = accessToken;
          loggedInCallBack(newUserObject);
        });
      }
    } else {
      loggedInCallBack(null);
    }
  }, (error) => {
    errorCallback(error);
  });
};

export const logout = () => {
  firebase.auth().signOut();
};

export const showLogin = async (uiShownCallback) => {
  const response = await getUserCountry();
  const ui = firebaseui.auth.AuthUI.getInstance() || 
             new firebaseui.auth.AuthUI(firebase.auth());
  const firebaseuiConfig = {
    signInSuccessUrl: routes.dashboard,
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        return true;
      },
      uiShown: function() {
        // The widget is rendered. Hide the loader.
        uiShownCallback();
      },
    },
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        recaptchaParameters: {
          type: 'image', // 'audio'
          size: 'normal', // 'invisible' or 'compact'
          badge: 'bottomleft', //' bottomright' or 'inline' applies to invisible.
        },
        defaultCountry: response.countryCode ? response.countryCode : 'US',
        defaultNationalNumber: '1234567890',
        loginHint: '+11234567890',
      },
    ],
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    tosUrl: routes.termsOfService,
    privacyPolicyUrl: routes.privacyPolicy,
  };
  ui.start('#firebaseui-auth-container', firebaseuiConfig);
};

export const sendEmailVerification = (success,error) => {
  firebase.auth().currentUser.sendEmailVerification().then(function() {
    // Email sent.
    success();
  }).catch(function(error) {
    // An error happened.
    console.log(error);
    error();
  });
}

export const sendPasswordResetEmail = (email, success, errorCallback) => {
  firebase.auth().sendPasswordResetEmail(email).then(function() {
    // Email sent.
    success();
  }).catch(function(error) {
    // An error happened.
    console.log(error);
    errorCallback();
  });
}

export const getUserCountry = async () => {
  try {
    const response = await Axios('http://ip-api.com/json', {
      timeout: 1000, // default to 1 sec
    });
    return response.data;
  } catch (err) {
    return 'US';
  }
};