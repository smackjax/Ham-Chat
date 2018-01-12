export const objectToArray = (obj)=>{
    const keys = Object.keys(obj);
    const newArray = 
        keys.map(key=>( obj[key] ));
    return newArray;
}