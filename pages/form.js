import React from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";

import { db } from "./_app";
import { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { useForm } from "react-hook-form";

function form() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [address, setAddress] = useState();

  const [currentAddress, setcurrentAddress] = useState("");
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  //FORM VARIABLE
  const onSubmit = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isAuthenticated) {
      setAddress(user.attributes.ethAddress);
      setcurrentAddress(address);
    } else {
      setAddress("");
    }
  }, [isAuthenticated]);

  //READ OPERATION

  const readData = async () => {
    setAddress(user.attributes.ethAddress);
    console.log(address);

    const docRef = doc(db, "wallets", address);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const passAddress = docRef._key.path.segments[1];
      const passName = docSnap.data().name;
      const passEmail = docSnap.data().emailAddress;
      console.log(docRef);

      setcurrentAddress(passAddress);
      setName(passName);
      setEmail(passEmail);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  //WRTIE OPERATION

  const writeData = async () => {
    if (isAuthenticated) {
      await setDoc(doc(db, "wallets", address), {
        name: Name,
        emailAddress: Email,
      });
    } else {
      alert("Can not write. Not authenticated");
    }
  };

  return (
    <div>
      <h1>form</h1>

      <form className="max-w-md mx-auto ">
        <input
          className="w-full"
          type="text"
          placeholder="Name"
          name="email"
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full"
          type="text"
          placeholder="Email"
          name="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full"
          type="text"
          placeholder="Wallet"
          name="wallet"
          value={currentAddress}
        />
      </form>

      <div className="flex gap-3 justify-center pt-3">
        <button className="btn" onClick={readData}>
          Read data (Dev purposes)
        </button>
        <button className="btn btn-primary" onClick={writeData}>
          Update
        </button>
      </div>
    </div>
  );
}

export default form;
