import Image from "next/image";
import { NextResponse } from "next/server";

export default async function Product({params}){

    const response = await fetch("http://localhost:3000/api/" + params.id);
    const data = await response.json();

    return(
        <p>{data.modelo}</p>
    );
}