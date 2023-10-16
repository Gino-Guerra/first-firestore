import { db } from "./connectDb.js"
const adb = db.collection('art')





export async function addArt(newArt){
await adb.add(newArt)
}

export async function getAllArt(){
    //first,get collection from db
    const coll = await adb.get()
    
    //second, convert to an array of objects
    const art = coll.docs.map(doc => ({id:doc.id, ...doc.data()}))
    
    // third console.log array of objects
console.table(art)

}