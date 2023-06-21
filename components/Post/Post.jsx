import Image from 'next/image';
import React from 'react'

export const Post = (props) => {

  console.log(props);

  return (
    <>
      <div className="container-top">
        <h1>{props.title}</h1>
        <p className="mb-2">{getFormattedDate(props.date)}</p>
        {props.featuredImage && (
          <Image
            src={props.featuredImage}
            width={1000}
            height={600}
            alt={props.title}
          />
        )}
      </div>
    </>
  )
}

const getFormattedDate = (date) => {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};