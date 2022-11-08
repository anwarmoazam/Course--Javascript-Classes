console.log('Course--Javascript Classes, Lesson 7');

console.log('Singleton in Javascript');

class Settings{
    constructor(){
        if(Settings.instance instanceof Settings){
            return Settings.instance;
        }

        this.settingObject = {
            'background' : '#ff0000',
            'version' : Math.floor(Math.random() * 4000)
        };
        Object.freeze(this.settingObject);
        Object.freeze(this); // freeze instance modifying
        Settings.instance = this;
    }

    get(key){
        return this.settingObject[key];
    }
}

const s1 = new Settings();
console.log(s1.settingObject);
const s2 = new Settings();
console.log(s2.settingObject);
s1.settingObject.background = '#00ff00'; //can't change properties of object using Object.freeze
console.log(s1.settingObject)

// freeze instance modifying
s1.newObj = {
    myName : 'Anwar'
}

console.log(s1.settingObject)
console.log(s2.settingObject)
console.log(s1 === s2)