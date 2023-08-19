import React, { useState, useEffect } from "react";
import Confetti from "react-confetti"; // a library for confetti animation
import "../styles/Success.css"; // a file for custom CSS styles

function Success() {
  const [loading, setLoading] = useState(true); // a state variable for loading status
  const [success, setSuccess] = useState(false); // a state variable for success status

  useEffect(() => {
    // a hook to run when the component mounts
    setTimeout(() => {
      // a function to simulate a delay of 5 seconds
      setLoading(false); // set loading to false
      setSuccess(true); // set success to true
    }, 5000);
  }, []);

  return (
    <div className='container'>
      {loading && <div className='loader'></div>}{" "}
      {/* show loader when loading is true */}
      {success && ( // show success message and confetti when success is true
        <>
          <h1 className='message'>Congratulations!! Payment Successful!</h1>
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            recycle={false}
            run={true}
            duration={15000}
          />
        </>
      )}
    </div>
  );
}

export default Success;
