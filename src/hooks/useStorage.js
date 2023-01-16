import React, {useState, useEffect} from "react";
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { collection, setDoc, getDocs, doc, addDoc} from "firebase/firestore";




const useStorage = (file) => {
    const [progress, setPRogress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, `${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed', 
                (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setPRogress(percentage);
            }, (err) => {
                setError(err);
            }, 
            async () => {
                const urlRef = await getDownloadURL(storageRef);
                const collectionRef = collection(projectFirestore, "images")
                const createdAt = timestamp;
                const payload = { urlRef, createdAt }
                const docRef = await addDoc(collectionRef, payload)
                console.log(docRef)
                setUrl(urlRef)
            }
        )    
    }, [file]);

    return {progress, url, error}
}

export default useStorage;