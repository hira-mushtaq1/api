import React, { useEffect } from "react";
import MediaCard from "../Components/card";
import axios from "axios";

export default function Data() {
  let getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((sucess) => {
        console.log(sucess);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let postData = () => {
    let obj = {
      title: "ABC Title",
      price: 187,
    };
    axios
      .post("https://fakestoreapi.com/products", obj)
      .then((res) => {})
      .catch((err) => {});
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="noo">
      <h1>Data</h1>
      <MediaCard />
      <button onClick={() => postData()}>Post</button>
    </div>
  );
}
