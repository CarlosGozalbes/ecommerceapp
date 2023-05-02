import { Rating } from "@mui/material";
import StarHalfIcon from "@mui/icons-material/StarHalf";


import styles from "./styles.module.scss";
import { AiOutlineLike } from "react-icons/ai";
export default function Review({ review }) {
  console.log(review)
  let { name, image } = review?.reviewBy || {};
 console.log(name);
 if (name===undefined) {name="Invited user"}
 if (image === undefined) {
   image =
     "https://st3.depositphotos.com/13159112/17145/v/450/depositphotos_171453724-stock-illustration-default-avatar-profile-icon-grey.jpg";
 }
  return (
    <>
      {name && (
        <div className={styles.review}>
          <div className={styles.flex}>
            <div className={styles.review__user}>
              <h4>
                {name?.slice(0, 1)}***
                {name.slice(name?.length - 1, name?.length)}
              </h4>
              <img src={image} alt="" />
            </div>
            <div className={styles.review__review}>
              <Rating
                name="half-rating-read"
                value={review.rating}
                precision={0.5}
               
                readOnly
                style={{ color: "#facf19" }}
              />
              <p>{review.review}</p>
              <p>
                <span>Overall Fit:</span>
                {review.fit}
                &nbsp;&nbsp;
                <span>Size:</span>
                {review.size}
                &nbsp;&nbsp;
                <div className={styles.flex}>
                  <img
                    src={review.style.image}
                    alt=""
                    className={styles.review__img}
                  />
                </div>
              </p>
            </div>
          </div>
          <div className={styles.flex}>
            <div className={styles.review__images}>
              {review.images.length > 0 &&
                review.images.map((img) => <img src={img?.url} alt="" />)}
            </div>
            <div className={styles.review__extra}>
              <div className={styles.review__extra_likes}>
                {review.likes && review.likes?.likes}
                <AiOutlineLike />
              </div>
              <div className={styles.review__extra_date}>
                {review?.updatedAt?.slice(0, 10)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
