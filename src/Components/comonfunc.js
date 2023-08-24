import { createContext } from "react";
import { ReactDOM } from "react";

export const capitalizeFirstLetter = (value) => {
    if (value) {
         let str = [...value]
         str[0] = str[0].toUpperCase();
         str = str.join("")
         return str
    }
    else {
         return value
    }
}

export const Spaces = (value) => {
    let arr = value.split("")
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    if (value !== undefined) {
         for (let i = 0; i < value.length; i++) {
              if (alphabet.includes(value[i])) {
                   let index = arr.indexOf(value[i])
                   arr.splice(index, 0, " ")
                  
              }
         }
    }
    return capitalizeFirstLetter(arr.join(""))
}