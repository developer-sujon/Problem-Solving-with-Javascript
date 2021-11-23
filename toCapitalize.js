function toCapitalize(name) {
    let nameArr = name.split(' ');
    let strings = '';
    for (let i = 0; i < nameArr.length; i++) {
        let capitalize = (nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1)).split(' ');
        capitalize.forEach(string => strings += `${string} `)
    }
    return strings
}

console.log(toCapitalize('mohammad sujon islam'));