import React from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

import { db } from "./_app";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";

function form() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [address, setAddress] = useState();
  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
    } else {
      setAddress("");
    }
  }, [isAuthenticated]);

  const readData = async () => {
    setAddress(user.attributes.ethAddress);
    console.log(address);

    const docRef = doc(db, "wallets", address);
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
