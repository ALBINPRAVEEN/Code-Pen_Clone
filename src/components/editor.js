import React, { useState } from "react";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

import { BsArrowsAngleContract, BsArrowsAngleExpand } from "react-icons/bs";
const Editor = (props) => {
  const { displayName, language, value, onChange } = props;
  const [open, setOpen] = useState(true);
  var handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        {open ? (
          <BsArrowsAngleContract onClick={() => setOpen((prev) => !prev)} />
        ) : (
          <BsArrowsAngleExpand onClick={() => setOpen((prev) => !prev)} />
        )}
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default Editor;
