import React from "react";

function CartWidget() {
  // Número hardcodeado para la notificación
  const itemCount = 3;

  return (
    <div className="cart-widget">
      <i className="bi bi-cart"></i>
      <span className="badge bg-primary">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
