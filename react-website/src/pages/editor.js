import React from 'react';
  
const Editor = () => {
  return (
    <div>
      <div>
        <EditPane name="Sara" />;
      </div>
      <div>
        <input type={"text"}></input>
      </div>
    </div>
  );
};

function EditPane(props) {
  return <h1>Hello, {props.name}</h1>;
}
export default Editor;