const findTheOldest = function(array) {
    let oldest = 0;
    let oldestIndex = 0;

    function checkAge(death, birth) {
        if(!death) {
            const d = new Date();
            let years = d.getFullYear() - birth;
            return years;
        }
        return death - birth;
    }
    
    array.forEach((element, index) => {
        let current = checkAge(element.yearOfDeath, element.yearOfBirth);  
        if (current > oldest) {
            oldest = current;
            oldestIndex = index;
        };
    });
    
    return array[oldestIndex];
  };

// Do not edit below this line
module.exports = findTheOldest;
