/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Clients() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/6">
        <img src="/images/amazon.svg" alt="" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img src="/images/microsoft.svg" alt="" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img src="/images/tesla.svg" alt="" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img src="/images/google.svg" alt="" className="mx-auto" />
      </div>
      <div className="w-1/6">
        <img src="/images/facebook.svg" alt="" className="mx-auto" />
      </div>
    </div>
  );
}
