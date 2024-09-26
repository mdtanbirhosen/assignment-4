function calculateTax(income, expenses) {
    if (0 <= income && 0 <= expenses && expenses <= income) {
        const availableMoney = income - expenses;
        const tax = availableMoney * .20;
        return tax;
    }
    else {
        return "Invalid Input "
    }
}



function sendNotification(email) {
    let array = email.split('@');
    if (array.length === 2) {
        const output = array[0] + " sent you an email from " + array[1];
        return output;
    }
    else {
        return 'Invalid Email';
    }
}



function checkDigitsInName(name) {
    if (typeof (name) === 'string') {
        const array = name.split('');
        for (let i = 0; i < 10; i++) {
            for (num of array) {
                if (num == i) {
                    return true;
                }
            }
        }
        return false;
    }
    else {
        return 'Invalid Input'
    }
}


// wrong progrmm
function calculateFinalScore(obj) {
    if (typeof (obj) === 'object') {
        if (obj.isFFamily === true) {
             total = obj.testScore + obj.schoolGrade + 20;
            if (total >= 80) {
                return true;
            }
            else {
                return false
            }
        }
        else if (obj.isFFamily === false) {
            return false;
        }
    }
    else {
        return 'Invalid Input'
    }
}




function waitingTime(waitingTimes, serialNumber) {
    if (Array.isArray(waitingTimes) && typeof (serialNumber) === 'number') {
        let sumOfArray = 0;
        for (array of waitingTimes) {
            sumOfArray += array;
        }
        const avarage = Math.round(sumOfArray / waitingTimes.length);
        const remainingPerson = (serialNumber - 1) - waitingTimes.length;
        return avarage * remainingPerson;
    }
    else {
        return 'Invalid Input';
    }
}
