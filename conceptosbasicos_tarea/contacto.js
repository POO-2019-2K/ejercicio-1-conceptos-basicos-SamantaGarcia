export default class Contact{
    constructor(name, lastName, position, age, address, telephone, email){
        this._name = name;
        this._lastName = lastName;
        this._position = position;
        this._age = age;
        this._address = address;
        this._telephone = telephone;
        this._email = email;
        this._data = "0";
    }

    _showData(){
        console.log(`Age: ${this._age}, Address: ${this._address}, Telephone: ${this._telephone}, Email: ${this._email}`);
    }

    _showPosition(){
        console.log(`The position of ${this._name} ${this._lastName} is ${this._position}`);
    }

    optionOne(){
        this._data = "1";
        this._showPosition();
        this._showData();
    }

    optionTwo(){
        this._data = "0";
        this._showPosition();
    }

}