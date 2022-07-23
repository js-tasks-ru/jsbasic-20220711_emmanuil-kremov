function camelize(str) {
    return str.split('-').map((elem, index) => index < 1 ? elem : elem.slice(0, 1).toUpperCase() + elem.slice(1)).join(''); 
}
