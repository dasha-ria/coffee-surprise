import React from "react";
import TextTransition, { presets } from "react-text-transition";

const WORDS = ["coffee facts", "did you know"];

export function TextReveal() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex justify-center font-bold text-5xl">
      <TextTransition springConfig={presets.stiff}>
        {" "}
        {WORDS[index % WORDS.length]}
      </TextTransition>
    </div>
  );
}
