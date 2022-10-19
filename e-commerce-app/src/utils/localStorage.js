
function loadData(key){
    try{
        
        return JSON.parse( localStorage.getItem(key));
        
    } catch {
        return undefined;
    }
}

function saveData(key,data) {
 localStorage.setItem(key,JSON.stringify(data));
}

function removeData (key){
    localStorage.removeItem(key);
}
export {loadData,saveData,removeData}