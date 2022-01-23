export class User{
    constructor(
        public email : string,
        public id : string,
        private _token : string,
        private _tokenExpirationDate : Date
    ) {}

    get token(){      // a getter can be used as user.token
        console.log('setter called')
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate)
            return null;
        return this._token;
    }

}