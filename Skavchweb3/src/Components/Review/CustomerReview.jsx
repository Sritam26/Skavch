import React from "react";
import "./CustomerReview.css";
import photo1 from "./assets/img1.jpg";
import photo2 from "./assets/img2.jpg";
import photo3 from "./assets/img3.jpg";
import photo4 from "./assets/img4.jpg";
import photo5 from "./assets/img5.jpg";
import photo6 from "./assets/img6.jpg";


const reviews = [
  {
    id: 1,
    text: "Excellent AI solutions! Their team provided insightful strategies that boosted our efficiency.",
    image: photo1,
  },
  {
    id: 2,
    text: "Professional and knowledgeable consultants. Helped us implement AI seamlessly into our business.",
    image: photo2,
  },
  {
    id: 3,
    text: "Great experience! They delivered innovative solutions tailored to our needs.",
    image: photo3,
  },
  {
    id: 4,
    text: "Reliable and responsive team. Their AI expertise saved us time and reduced costs.",
    image: photo4,
  },
  {
    id: 5,
    text: "Great experience! They delivered innovative solutions tailored to our needs.",
    image: photo5,
  },
  {
    id: 6,
    text: "Reliable and responsive team. Their AI expertise saved us time and reduced costs.",
    image: photo6,
  },
];

const CustomerReview = () => {
  return (
    <div className="customer-review-section">
      <div className="container">
        <h2 className="title">Customer Reviews</h2>
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={review.id} className={`review-item ${index % 2 !== 0 ? "reverse" : ""}`}>
              <img src={review.image} alt={`Reviewer ${review.id}`} className="review-image" />
              <div className="review-text">
                <p>{review.text}</p>
                <div className="rating">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
