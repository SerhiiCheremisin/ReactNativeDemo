import * as SecureStore from 'expo-secure-store';

export async function setStorageValue(key, value) {
   try{
    await SecureStore.setItemAsync(key, value);
   }
   catch(e) {
     console.log(e);
   }
   }
 
  export async function getStorageValue(key) {
    try{
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            console.log(`secure store is: ${result}`)
           return result;
        }
        console.log(`Such key as '${key}' does not exist in storage`);
    }
    catch (e) {
        console.log(e);
    }
   }