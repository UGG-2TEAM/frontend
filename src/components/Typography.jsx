import React from "react";
import styles from "./Typography.module.css";

const Typography = ({
  variant = "body01",
  component = "p",
  children,
  className = "",
  styles = {},
}) => {
  const Component = component;
  const typographyClass = `${styles[variant]} ${className}`.trim();
  console.log(typographyClass);
  return (
    <Component className={typographyClass} style={styles}>
      {children}
    </Component>
  );
};

export default Typography;
