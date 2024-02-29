import React from "react";
import { StyledButton, StyledMiniButton } from "@/styles/components/StyledButton";

const Button = ({ href, text, onClick, type = "default" }) => {
  if (type === "mini") {
    return (
      <StyledMiniButton>
        <a href={href} onClick={onClick}>
          {text}
        </a>
        <span> → </span>
      </StyledMiniButton>
    );
  }

  if (type === "default") {
    return (
      <StyledButton>
        <a href={href} onClick={onClick}>
          {text}
        </a>
        <span> → </span>
      </StyledButton>
    );
  }
};

export default Button;
