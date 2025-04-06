import { useState } from "react";

const Workshop4 = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormdata] = useState(initialFormData);
  const [data, setData] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data,formData])
    handleClear()
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormdata({
      ...formData,
      [name]: value,
    });
    console.log(`name:${name}, value:${value}`);
  };
  const handleClear = (event) => {
    setFormdata(initialFormData);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>
            Name :{" "}
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
        </div>
        <div>
          <label>
            Email :{" "}
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={formData.email}
            />
          </label>
        </div>
        <div>
          <label>
            Password :{" "}
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              value={formData.password}
            />
          </label>
        </div>
        <button type="submit">Register</button>
        <button type="button" onClick={handleClear}>
          Cleaer
        </button>
      </form>
    </>
  );
};
export default Workshop4;
