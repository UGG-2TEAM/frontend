import React from "react";
import styles from "./Typography.module.css";

const Typography = ({
  variant = "body01",
  component = "p",
  children,
  className = "",
}) => {
  const Component = component;
  const typographyClass = `${styles[variant]} ${className}`.trim();

  return <Component className={typographyClass}>{children}</Component>;
};

export default Typography;
