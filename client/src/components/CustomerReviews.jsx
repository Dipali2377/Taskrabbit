import React from "react";

import "../styles/CustomerReviews/CustomerReview.css";
const reviews = [
  {
    name: "Elizabeth P.",
    rating: 5,
    review:
      "Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes. He also fixed a drawer on an already assembled desk so it...",
    category: "IKEA Furniture Assembly",
  },
  {
    name: "Tiffany B.",
    rating: 5,
    review:
      "David did an awesome job assembling crib and dresser for nursery. Really appreciate this! He cleaned up the area after his work, organized the boxes for easy disposal and went through the...",
    category: "Furniture Assembly",
  },
  {
    name: "Amanda L.",
    rating: 5,
    review:
      "I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling. Joe was great with communication, was fast, professional and did a fantastic job. He even came back to do a second layer on the patches to ma...",
    category: "Home repairs",
  },
  {
    name: "Sabrina K.",
    rating: 5,
    review:
      "Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn't know I would need. He hung a heavy chandelier perfectly and fixed a cabinet to our wall. 100% would hir...",
    category: "Electrical help",
  },
  {
    name: "Jana T.",
    rating: 5,
    review:
      "Jose fixed my AC drain line which was clogging my master bathroom sink. He was prompt, communicative, and efficient. Highly recommend!",
    category: "Plumbing",
  },
  {
    name: "Elisa R.",
    rating: 5,
    review:
      "Michael did a great job helping us install frameless glass hinged shower doors with an unusual set up. He was patient and willing to help figure it out with us. Thank you Michael!",
    category: "General Mounting",
  },
];

const CustomerReviews = () => {
  return (
    <div className="reviews-section">
      <h1>See what happy customers are saying about Taskrabbit</h1>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
            <p className="review-text">{review.review}</p>
            <p className="category">{review.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
