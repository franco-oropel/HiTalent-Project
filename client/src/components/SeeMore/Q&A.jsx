import React, { useEffect, useState } from "react";
import { Input, Button } from "@chakra-ui/react";
import { postQuestion, getTalentById, getPostQuestion } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import QyAanswer from "./Q&Aanswer";

export default function QyA() {
  const questionsPost = useSelector((state) => state.index.questionsPost);
  const user = useSelector((state) => state.index.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");

  // useEffect(() => {
  //     dispatch(postQuestion(userState.id))
  // })
  useEffect(() => {
    dispatch(getPostQuestion(id));
  }, [dispatch, id]);

  let body = {
    question: question,
    user_id: user.id,
    post_id: questionsPost.id,
  };
  console.log("questionsPost", questionsPost);
  console.log("body del state", body);

  function onSubmit(e) {
    e.preventDefault();
    // console.log("body del dispatch", body);
    // dispatch(
    //   postQuestion({
    //     question: question,
    //     user_id: user.id,
    //     post_id: questionsPost.id,
    //   })
    // );
    // setQuestion("");
  }

  function onChange(e) {
    e.preventDefault();
    setQuestion(e.target.value);
  }

  function onClick(e) {
    console.log("body del dispatch", body);
    e.preventDefault();
    dispatch(postQuestion(body));
    dispatch(getPostQuestion(id));
    alert(
      "¡Tu pregunta fue enviada! El dueño de la publicación fue notificado."
    );
    setQuestion("");
    navigate(`/talent/${id}`); //La pregunta se va a mostrar, el usuario la tiene que responder desde su panel
    <QyAanswer />;
  }

  return (
    <div class="m-3">
      <h3 class="text-xl font-semibold">Haz una pregunta</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <Input
          value={question}
          onChange={onChange}
          placeholder="Ingrese su pregunta"
          size="md"
        />
        <Button onClick={(e) => onClick(e)}>Enviar</Button>
      </form>
    </div>
  );
}
