import React from 'react';
import axios from "axios";
import { api } from "../../../config/index";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const Verify = () => {
    const { activation_token } = useParams();
    const [error, setError] = useState(false);
  
    useEffect(() => {
      if (activation_token) {
        const sendRequest = async () => {
          await axios
            .post(`${api}/activation`, {
              activation_token,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              setError(true);
            });
        };
        sendRequest();
      }
    }, [error,activation_token]);
    return (
        <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
    );
};

export default Verify;
