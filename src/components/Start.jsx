import React, { useEffect, useState } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Start = ({ setStart }) => {
  const [recycle, setRecycle] = useState(true);
  const { width, height } = useWindowSize;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setRecycle(!recycle);
    }, 4000);
    const startOut = setTimeout(() => {
      setStart(false);
    }, 8000);

    return () => {
      clearTimeout(timeOut);
      clearTimeout(startOut);
    };
  }, []);

  return (
    <Confetti
      width={width}
      height={height}
      recycle={recycle}
      numberOfPieces={200}
      gravity={0.1}
      wind={0}
    />
  );
};

export default Start;
