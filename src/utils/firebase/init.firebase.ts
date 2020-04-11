import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

class InitFirebase {

    private config  = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_ID,
        measurementId: process.env.REACT_APP_MEASUREMENT_ID
    };

    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(this.config)
        }
    }

    public auth()  {
        return firebase.auth()
    }

    public storage()  {
     return firebase.storage()
    }

    public firestore()  {
        return firebase.firestore()
    }

}

export default InitFirebase;
