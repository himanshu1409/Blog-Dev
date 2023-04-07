import { useState } from "react";
import { firestore } from "../firebase";
import { useFormInput } from "./hooks";

function CreatePost() {
  const title = useFormInput("");
  const writer = useFormInput("");
  const content = useFormInput("");

  // const [title, setTitle] = useState();
  // const [writer, setWriter] = useState();
  // const [content, setContent] = useState();

  function handleSubmit(e) {
    e.preventDefault(); // prevents reloading of page when form is submitted

    console.log("title", title);
    console.log("subTitle", writer);
    console.log("content", content);

    // firestore.collection("Blog").add({
    //   title,
    //   content,
    //   writer,
    //   createdAt: new Date(),
    // });

    firestore.collection("Blog").add({
      title: title.value,
      content: content.value,
      writer: writer.value,
      createdAt: new Date(),
    });
  }

  return (
    <div className="create-post">
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Title</label>
          {/* <input value={title} onChange={(e) => setTitle(e.target.value)} /> */}
          <input {...title} />
        </div>

        <div className="form-field">
          <label>Writer</label>
          {/* <input value={writer} onChange={(e) => setWriter(e.target.value)} /> */}
          <input {...writer} />
        </div>

        <div className="form-field">
          <label>Content</label>
          {/* <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea> */}
          <textarea {...content}></textarea>
        </div>

        <button className="create-post-btn">Create Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
