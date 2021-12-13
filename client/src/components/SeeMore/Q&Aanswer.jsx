import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPostQuestion } from "../../actions/index";

export default function QyAanswer() {
  const dispatch = useDispatch();
  const qya = useSelector((state) => state.index.moreTalent);
  const questionsPost = useSelector((state) => state.index.questionsPost);

  useEffect(() => {
    dispatch(getPostQuestion(qya.id));
  }, [dispatch, qya.id]);

  return (
    <div class="h-1/4 m-3">
      <h3 class="text-xl font-semibold">Preguntas</h3>
      <div>
        {questionsPost?.questions?.length > 0 ? (
          questionsPost.questions.map((e) => (
            <>
              <div class="flex flex-col bg-light mb-2 rounded-md">
                {"P: " + e.question}
                <div>
                  {e.answer
                    ? "R: " + e.answer
                    : "Esta pregunta aún no tiene respuesta"}
                </div>
              </div>
            </>
          ))

        ) : (
          <span class="text-gray-400">Aún no hay preguntas</span>
        )}
      </div>
      <hr />
    </div>
  );
}
