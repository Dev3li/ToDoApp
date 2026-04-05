export function setAccounts(accounts){
    localStorage.setItem('Accounts',JSON.stringify(accounts));
    console.log(accounts)
}
export function getAccounts(){
    return JSON.parse(localStorage.getItem('Accounts')) || []
}

export function setUser(user){
    localStorage.setItem('user',JSON.stringify(user));
    console.log(user)
}
export function getUser(){
    return JSON.parse(localStorage.getItem('user')) || {}
}