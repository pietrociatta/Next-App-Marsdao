import React from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import { db } from "./_app";

function form() {
  const readData = async () => {
    const walletAddress = "0x0B84BC8aA0B38F46EdD392B4F0270a870e30AFeF";
    const docRef = doc(db, "wallets", walletAddress);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  return (
    <div>
      <h1>form</h1>

      <p>Wallet Address: </p>
      <p>Name: </p>
      <p>Email Address: </p>

      <button onClick={readData}>Read data</button>
    </div>
  );
}

export default form;
