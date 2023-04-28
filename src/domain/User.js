export class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get() {
        return this;
    }

    getJson() {
        return {
            email: this.email,
            password: this.password
        };
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    setEmail(email) {
        this.email = email;
    }

    setPassword(password) {
        this.password = password;
    }
}
