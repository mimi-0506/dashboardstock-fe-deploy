"use client";

import { useState } from "react";
import { styled } from "@/styled-system/jsx";

const ToggleLayout = styled("div", {
  base: {
    padding: "10px",
  },
});

const ToggleContainer = styled("div", {
  base: {
    display: "flex",
    borderRadius: { base: "5px", sm: "10px" },
    overflow: "hidden",
    backgroundColor: "gray.400",
    width: { base: "110px", sm: "122px" },
    aspectRatio: { base: "110/30", sm: "122/40" },
    position: "relative",
    cursor: "pointer",
  },
});

const Toggle = styled("div", {
  base: {
    position: "absolute",
    width: "50%",
    height: "100%",
    backgroundColor: "#6536ff",
    borderRadius: { base: "5px", sm: "10px" },
    transition: "transform 0.3s ease-in-out",
  },
  variants: {
    active: {
      false: { transform: "translateX(0)" },
      true: { transform: "translateX(100%)" },
    },
  },
});

const ToggleLabel = styled("span", {
  base: {
    flex: "1",
    textAlign: "center",
    fontSize: { base: "14px", sm: "16px" },
    color: "white",
    zIndex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function ToggleButton() {
  const [active, setActive] = useState(false);

  return (
    <ToggleLayout>
      <ToggleContainer onClick={() => setActive(!active)}>
        <Toggle active={active} />
        <ToggleLabel>국내</ToggleLabel>
        <ToggleLabel>해외</ToggleLabel>
      </ToggleContainer>
    </ToggleLayout>
  );
}
