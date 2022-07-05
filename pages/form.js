import React from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { db } from './_app';
import { useEffect, useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useForm } from 'react-hook-form';
import { IoRefresh } from 'react-icons/io5';

function Form() {
  const { authenticate, isAuthenticated, user, logout } = useMoralis();
  const [address, setAddress] = useState();

  const [currentAddress, setcurrentAddress] = useState('');
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
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
      setAddress('');
    }
  }, [isAuthenticated]);

  //READ OPERATION

  const readData = async () => {
    setAddress(user.attributes.ethAddress);
    console.log(address);

    const docRef = doc(db, 'wallets', address);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
      const passAddress = docRef._key.path.segments[1];
      const passName = docSnap.data().name;
      const passEmail = docSnap.data().emailAddress;
      console.log(docRef);

      setcurrentAddress(passAddress);
      setName(passName);
      setEmail(passEmail);
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

  //WRTIE OPERATION

  const writeData = async () => {
    if (isAuthenticated) {
      await setDoc(doc(db, 'wallets', address), {
        name: Name,
        emailAddress: Email,
      });
    } else {
      alert('Can not write. Not authenticated');
    }
  };

  return (
    <div className="bg-base-100 shadow-lg h-screen flex justify-center items-center">
      <div className="p-6 bg-base-300 w-[700px] rounded-xl ">
        <h1 className="text-center font-bold font-Poppins text-2xl text-slate-50">
          Profile
        </h1>

        <form className="max-w-md mx-auto mt-3 p-4  ">
          <div className="form-control ">
            <span className="min-w-[100px]  justify-center">Name</span>
            <input
              type="text"
              placeholder="John Doe"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full  bg-white"
            />
          </div>
          <div className="form-control mt-3">
            <span className="min-w-[100px] justify-center">Email</span>
            <input
              type="text"
              placeholder="jhondoe@gmail.com"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full  bg-white"
            />
          </div>

          <div className="form-control mt-3">
            <span className="min-w-[100px] justify-center">Wallet</span>
            <input
              type="text"
              placeholder="Mario"
              readOnly={true}
              value={currentAddress}
              className="input w-full  bg-white"
            />
          </div>
        </form>

        <div className="sm:flex-row flex-col  w-full max-w-max mx-auto space-x-3 gap-3 text-center sm:justify-center pt-6">
          <button className="btn" onClick={readData}>
            <IoRefresh />
          </button>
          <button className="btn btn-primary mt-2 sm:mt-0" onClick={writeData}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
