class Guest {
    fName;
    lname;
    age;

    equipment;
    teachers;
    allActivities;

    constructor(fName, lname, age) {
        this.fName = fName;
        this.lname = lname;
        this.age = age;

        this.equipment = [];
        this.teachers = [];
        this.allActivities = [];
    }
}

class Activities {
    title;
    value;
    constructor(title, value) {
        this.title = title;
        this.value = value;
    }
}

class Teacher {
    fName;
    lname;
    profile;
    experience;
    constructor(fName, lname, profile, experience) {
        this.fName = fName;
        this.lname = lname;
        this.profile = profile;
        this.experience = experience;
    }
}

class Equipment {
    name;
    dose;
    constructor(name, dose) {
        this.name = name;
        this.dose = dose;
    }
}