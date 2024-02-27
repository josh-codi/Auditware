import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

function TextEditor() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);

  const handleInsertLink = () => {
    const url = prompt("Enter the URL");

    if (url) {
      const link = `<a href="${url}" target="_blank">${url}</a>`;
      const range = quillRef.current.getEditor().getSelection();
      quillRef.current.getEditor().clipboard.dangerouslyPasteHTML(
        range.index,
        link,
        "api"
      );
    }
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      // Access the Quill instance through the ref
      const quill = quillRef.current.getEditor();

      // Modify modules or formats if needed
      quill.updateContents([
        { insert: "\n" }, // Insert a new line to separate the existing content
      ]);

      // Insert the toolbar options
      quill.formatLine(1, 1, { customLink: handleInsertLink });
    }

    return () => {
      isMounted = false;
    };
  }, []);


  function extractContent(htmlString) {
    const match = htmlString.match(/<p>(.*?)<\/p>/);
    return match ? match[1] : null;
}

const handleChange = (content) => {
    setValue(content);
    console.log(content);
  };

  return (
    <EditorContainer>
      <ReactQuill
        ref={quillRef}
        className="react-quill"
        style={{ border: "none", height: "100%" }}
        value={value}
        onChange={handleChange}
        placeholder="Type here.."
      />
    </EditorContainer>
  );
}

const EditorContainer = styled.div`
  height: 500px; /* Set the desired height */
`;

export default TextEditor;