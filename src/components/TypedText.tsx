import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { colors } from "../styles/neobrutalism";

interface TypedTextProps {
  strings: string[];
}

const TypedText: React.FC<TypedTextProps> = ({ strings }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, [strings]);

  return (
    <span
      ref={el}
      style={{
        color: colors.accent,
        WebkitTextStroke: `1px ${colors.dark}`,
        display: "inline-block",
      }}
    />
  );
};

export default TypedText;
