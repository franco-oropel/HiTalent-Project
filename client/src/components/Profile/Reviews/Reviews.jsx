import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getReviewbyId, getUserbyId } from "../../../actions/index";

export default function Reviews() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.index.review);
  useEffect(() => {
    dispatch(getReviewbyId(id));
    //dispatch(getUserbyId(review.posts?.map((e) => e.id)));
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center bg-dark border-2 text-white border-white rounded-lg w-11/12 py-4">
      <div className="flex flex-col items-center py-2">
        {!review ? (
          <h2>No tienes publicaciones para obtener reseñas...</h2>
        ) : (
          review.posts?.map((e) => (
            <div className="flex flex-row justify-around items-center bg-semidark border border-white w-11/12 h-auto m-1">
              <span className="p-2">{e.title}</span>
              <span className="px-2">{e.reviews[0].description}</span>
              <span className="px-2 font-black italic">
                {e.reviews[0].user.username}
              </span>
              <span>{e.reviews[0].rating}</span>
            </div>
          ))
        )}
        {review.posts.map((e) => !e.reviews) ? (
          <h1>No tienes reseñas por el momento...</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
