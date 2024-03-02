import { Heading } from "@chakra-ui/react";
import React from "react";
import "../styles/Hotels.css";

const Hotels = () => {
  return (
    <div id='hotels'>
      <div id='text'>
        <Heading>Great Locations across the World</Heading>
        <div className='desc'>
          <p>
            Travel to the most breathtaking and exotic location across the globe
            with us. From the majestic mountains of Patagonia to the pristine
            beaches of Bali. we'll take you there.
          </p>
        </div>
      </div>
      <div>
        <img
          src='https://private-user-images.githubusercontent.com/125983433/309440418-c1e43285-3bed-4a12-880f-e0b827d5f068.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDkzNTM4NTUsIm5iZiI6MTcwOTM1MzU1NSwicGF0aCI6Ii8xMjU5ODM0MzMvMzA5NDQwNDE4LWMxZTQzMjg1LTNiZWQtNGExMi04ODBmLWUwYjgyN2Q1ZjA2OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMzAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDMwMlQwNDI1NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOGQxNDI5NDdmZDZhYzE0ZDFkODEyNTg4YTEwNDg2YmE4MTg1ZjM3NzUxNTk4Y2YyYzU2Y2ZlODQ2N2FlMTkzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.-a6fowgOTFOkUlYKz_3OVGITbKxNP1-2DdPXKqb8fU4'
          alt='map'
        />
      </div>
    </div>
  );
};

export default Hotels;
