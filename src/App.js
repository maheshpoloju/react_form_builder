import { FormBuilder } from "cb-react-forms";
import { useState } from "react";
import Modal from "react-modal";
import "./App.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function App() {
  const [formData, setFormData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }
  const handleFormData = (data) => {
    var obj = JSON.parse(data);

    setFormData(obj);
    setShowModal((prev) => !prev);
  };
  return (
    <div className="App">
      {!showModal ? (
        <FormBuilder onSubmit={(data) => handleFormData(data)} />
      ) : (
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="form-data">
            {formData &&
              formData.map((each) => {
                const { label, options } = each;
                const { blocks } = label;
                const labelText = blocks[0].text;

                return (
                  <div>
                    <h1>Label: {labelText}</h1>
                    {options.map((each) => (
                      <h1>Option: {each.value}</h1>
                    ))}
                  </div>
                );
              })}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
