import React, { useEffect, useState } from "react";
export default function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const serverResponse = await fetch("https://fakestoreapi.com/products/");
      const JSONData = await serverResponse.json();
      setData(JSONData);
    }
    fetchData();
  }, []);
  return data.length === 0 ? null : ( 
    <>
      {data.map((element) => (
        <div className="book">
          <img src={element.image} alt="" />
          <p>Title: {element.title}</p>
          <p>Category {element.category}</p>
        </div>
      ))}
    </>
  );
}