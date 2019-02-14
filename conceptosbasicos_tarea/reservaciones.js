export default class Reservacion{
    constructor(name, lastName, age, address, telephone, email){
        this._name = name;
        this._lastName = lastName;
        this._age = age;
        this._address = address;
        this._telephone = telephone;
        this._email = email;
        this._nights = "0";
        this._date = "0";
        this._days = Date;
    }

    getNight(){
        return this._nights;
    }
    setNight(){
        this._nights = nights;
    }

    getdate(){
        return this._date;
    }
    setdate(){
        this._date = date;
    }

    setDaysForArrive(){
        let dif = this._date - this._days;
        let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        console.log(`${this.dias}`);
    }


    _showData(){
        console.log(`Reservaciones:
        Name: ${this._name},
        Lastname: ${this._lastName},
        Age: ${this._age},
        Address: ${this._address},
        Telephone: ${this._telephone},
        Email: ${this._email},
        Nights: ${this._nights},
        Date: ${this._date}`);
    }
}