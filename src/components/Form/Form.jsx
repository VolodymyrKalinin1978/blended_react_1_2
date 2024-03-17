import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import styles from "./Form.module.css";
import { useAddCommentMutation } from "../../redux/commentApi";
import { Loader } from "../Loader/Loader";

export const Form = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [addComment, { isLoading, isSuccess }] = useAddCommentMutation();
  if (isSuccess) {
    toast.success("Congrats, you commit edit");
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setAuthor(value);
      return;
    }
    if (name === "text") {
      setContent(value);
      return;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addComment({ author, content });
    setAuthor("");
    setContent("");
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name="text"
            rows="5"
            value={content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          <BiMailSend className={styles.icon} />
          Send
        </button>
      </form>
      {isLoading && <Loader />}
    </div>
  );
};
