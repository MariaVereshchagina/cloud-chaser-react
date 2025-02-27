import React from "react";

const Button = ({ className, href, children, type, onClick }) => {
  return href ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
