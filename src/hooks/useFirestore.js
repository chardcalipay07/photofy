import { useState ,useEffect } from "react"
import { projectFirestore } from "../firebase/config"
import {collection, onSnapshot, orderBy} from "firebase/firestore";

const useFirestore = () => {

    const [docs, setDocs] = useState([])

    useEffect(() => {

        const unsub = onSnapshot(collection(projectFirestore, "images"), (snapshot) => {
            
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({id: doc.id, ...doc.data()})
            })
            setDocs(list)
        }, (error) => {
            console.log(error)
        });
            return () => {
                unsub();
            }

    },[])

    return { docs };

}   

export default useFirestore;