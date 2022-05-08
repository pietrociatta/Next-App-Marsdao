import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

  const writeData = async () => {
    if (isAuthenticated) {
      await setDoc(doc(db, "wallets", address), {
        name: "EXAMPLE",
        emailAddress: "EMAIL",
      });
    } else {
      alert("Can not write. Not authenticated");
    }
  };

  return (
    <div>
      <h1>form</h1>

      <p>Wallet Address: </p>
      <p>Name: </p>
      <p>Email Address: </p>

      <div>
        <button onClick={readData}>Read data (Dev purposes)</button>
        <button onClick={writeData}>Update</button>
      </div>
    </div>
  );
}

export default form;
