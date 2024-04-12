import React, { useState } from "react";
import { OrderList } from "./components/OrderList/OrderList";

export default function App() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <OrderList/>
    </>
  );
}
