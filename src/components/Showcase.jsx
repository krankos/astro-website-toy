import React from "react";
import { useState } from "react";

export default function Showcase() {
  const [name, setName] = useState("John Doe");
  return <div>Hello {name}</div>;
}
