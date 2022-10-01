import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    id: "",
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(input);
    setInput((prevValue) => {
      return {
        title: "",
        content: ""
      };
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={input.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          onChange={handleChange}
          rows="3"
          value={input.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
