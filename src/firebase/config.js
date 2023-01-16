import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getFirestore, Timestamp } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyCsrh_oGT96PkydWliuuviOlDE_aLjVuZU",
        authDomain: "photofy-app.firebaseapp.com",
        projectId: "photofy-app",
        storageBucket: "photofy-app.appspot.com",
        messagingSenderId: "163411565570",
        appId: "1:163411565570:web:2d9b72dc612692e2831b1b"
    };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);
const timestamp = Timestamp.fromDate(new Date());

export { projectStorage, projectFirestore, timestamp }; 
