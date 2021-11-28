import { user1 } from "./FakeUsers"

export const loginToWeb = (userInfo) =>{
    const {_id, username, designation, isAdmin = false} = user1;
    const newUser = {_id, username, designation, isAdmin }
    setDB("user" , JSON.stringify(newUser))
}

export const logOutWeb = () =>{
    localStorage.clear()
}

export const setDB = (name, value) =>{
    localStorage.setItem(name, JSON.stringify(value));
}
export const getDB = (name) =>{
    return localStorage.getItem(name);
}
export const remDB = (name) =>{
    return localStorage.removeItem(name);
}