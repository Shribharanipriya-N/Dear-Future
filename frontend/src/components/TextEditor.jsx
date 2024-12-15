import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

const TextEditor = () => {
  const [editorValue, setEditorValue] = useState('');
  const quillRef = useRef();

  const handleChange = (value) => {
    setEditorValue(value);
  };

  // Toolbar configuration
  const modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'align': [] }],
      ['link', 'image' ],
      ['clean'],
    ],
  };

  return (
    <div className="text-editor-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <ReactQuill
        ref={quillRef}
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        placeholder="Type your message here..."
        style={{ height: '300px' }}
      />
    </div>
  );
};

export default TextEditor;
