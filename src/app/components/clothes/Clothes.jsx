"use client"
import { useEffect, useState } from "react";
import "./clothes.scss";

export const Clothes = () => {
    const [productArray, setProductArray] = useState(null);

    useEffect(() => {
        const handleData = async () => {
            try {
                const res = await fetch("api/products/stock", { method: "GET" });
                const data = await res.json();
                setProductArray(data);

            } catch (error) {
                console.log(error.message);
            }
        };

        handleData();
    }, []); 

    useEffect(() => {
        if (productArray !== null) {
            console.log(productArray);
        }
    }, [productArray]);

  return (
    <div className="clothes__container">
        <h1>
            Shop 
            <span className="span"><span className="border">with us</span></span>
        </h1>
        <div className="images__container">
            {productArray && productArray.map((items, index) => (
                <div className="card" key={index}>
                    <img src={items.img1} alt="" />
                    <div className="info">
                        <h3>{`$${items.price}`}</h3>
                        <h4>{items.nombre}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
