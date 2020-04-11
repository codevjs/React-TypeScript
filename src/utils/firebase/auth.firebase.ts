import InitFirebase from './init.firebase';

class AuthFirebase extends InitFirebase {

    public signinWihtEmiailAndPassword(email : string, password : string) : PromiseLike<object> {
       return this.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                return  Promise.resolve(user)
            })
            .catch(error => {

                return Promise.reject(error);
            })
    }

    public getIdTokenResult() : any {
        return this.auth().currentUser?.getIdTokenResult()
            .then(idTokenResult => {
                return Promise.resolve(idTokenResult)
            })
    }

    public siginOut() : void {

        this.auth().signOut();
    }

}

export default AuthFirebase;
