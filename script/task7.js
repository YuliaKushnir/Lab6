class Client {
    #login;
    #email;
    constructor(login, email) {
      this.#login = login;
      this.#email = email;
    }

    get login() {
        return this.#login;
    }

    get email() {
        return this.#email;
    }
    
    set login(newLogin) {
        this.#login = newLogin;
    }
    
    set email(newEmail) {
        this.#email = newEmail;
    }
}

// =================
const client = new Client('User#333', 'email@gmail.com');

console.log(client.login); 
console.log(client.email); 

document.getElementsByClassName('task7_1')[0].innerHTML = ("Login: " + client.login.toString() + ". E-mail: " + client.email.toString());

client.login = 'User#555';
client.email = 'user5@gmail.com';

console.log(client.login); 
console.log(client.email); 
document.getElementsByClassName('task7_2')[0].innerHTML = ("Login: " + client.login.toString() + ". E-mail: " + client.email.toString());
