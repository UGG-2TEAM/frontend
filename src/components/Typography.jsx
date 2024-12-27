import React from "react";
import styles from "./Typography.module.css";

const Typography = ({
  variant = "body01",
  component = "p",
  children,
  className = "",
  style = {},
}) => {
  const Component = component;
  const typographyClass = `${styles[variant]} ${className}`.trim();
  console.log(typographyClass);
  return (
    <Component className={typographyClass} style={style}>
      {children}
    </Component>
  );
};

export default Typography;
