class Users{
    #id;
    #name;
    #email;
    #password;
    constructor(id,name,email,password){
        this.#id = id;
        this.#name = name;
        this.#email = email;
        this.#password = password;
    }
    getId(){
        return this.#id;
    }
    getName(){
        return this.#name;
    }
    getEmail(){
        return this.#email;
    }
    getPassword(){
        return this.#password;
    }
}

export default Users;