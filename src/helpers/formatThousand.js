import React from "react";

function formatThousand(number = 0) {
  const thousand = new Intl.NumberFormat();
  return thousand.format(number);
}

export default formatThousand;
