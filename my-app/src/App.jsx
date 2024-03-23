import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    back1: null,
    back2: null,
    back3: null,
    back4: null,
    emailURL: "",
    emailText: "",
    social1URL: "",
    social1Text: "",
    social2URL: "",
    social2Text: "",
    title1: "",
    title2: "",
    text1: "",
    text2: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });

    updateItem(formDataToSend);

    e.target.reset()

    setFormData({
      emailURL: "",
      emailText: "",
      social1URL: "",
      social1Text: "",
      social2URL: "",
      social2Text: "",
      title1: "",
      title2: "",
      text1: "",
      text2: "",
    }
    )
  };

  const updateItem = (formDataToSend) => {
    axios
      .patch("http://localhost:8000/items/1/", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Item updated:", response.data);
        console.log("FormData", formData);
        // Дополнительная логика после обновления объекта
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="file" name="back1" onChange={handleChange}/>
        <input type="file" name="back2" onChange={handleChange}/>
        <input type="file" name="back3" onChange={handleChange}/>
        <input type="file" name="back4" onChange={handleChange}/>
        <input
          type="text"
          placeholder="ссылка на email"
          name="emailURL"
          value={formData.emailURL}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="текст email"
          name="emailText"
          value={formData.emailText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ссылка на соц-сеть 1"
          name="social1URL"
          value={formData.social1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="текст соц-сети 1"
          name="social1Text"
          value={formData.social1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ссылка на соц-сеть 2"
          name="social2URL"
          value={formData.social2}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="текст соц-сети 2"
          name="social2Text"
          value={formData.social2}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="заголовок текста 1"
          name="title1"
          value={formData.title1}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="заголовок текста 2"
          name="title2"
          value={formData.title2}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="текст 1"
          name="text1"
          value={formData.text1}
          onChange={handleChange}
        />
        <textarea
          type="text"
          placeholder="текст 2"
          name="text2"
          value={formData.text2}
          onChange={handleChange}
        />
        <button type="submit">Изменить</button>
      </form>
    </div>
  );
}

export default App;
