import InitFirebase from './init.firebase';
import firebase from "firebase/app";

class AuthFirebase extends InitFirebase {

    public signinWihtEmiailAndPassword(email : string, password : string) : Promise<firebase.auth.UserCredential> {
       return this.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                return  Promise.resolve(user)
            })
            .catch(error => {
                return Promise.reject(error);
            })
    }

    public getIdTokenResult() : Promise<firebase.auth.IdTokenResult> | undefined {
        return this.auth().currentUser?.getIdTokenResult(true)
            .then(idTokenResult => {
                return Promise.resolve(idTokenResult)
            })
            .catch(error => {
                return Promise.reject(error?.message)
            })
    }

    public siginOut() : Promise<string> {
        return this.auth()
            .signOut()
            .then(() => {
                return Promise.resolve('user signout.')
            })
            .catch(error => {
                return Promise.reject(error?.message)
            })
    }

}

export default AuthFirebase;
