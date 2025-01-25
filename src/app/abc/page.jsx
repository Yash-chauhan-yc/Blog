'use client'
import React, { useEffect, useState } from "react";

export default function Page() {
  const [result, setResult] = useState([])
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetch("http://localhost:3000/api/result");
      // const data = await fetchedData.json();
      setResult(fetchedData.json());
    }
    getData();
  }, [])
  console.log(result);
  return <div>{JSON.stringify(result)}</div>;
}
