import { useState } from "react";

const Workshop5 = () => {
  const initialFormData = {
    name: "mai",
    email: "email1",
    password: "1",
  };
  const [formData, setFormdata] = useState(initialFormData);
  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setData([...data, formData]);
    handleClear();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormdata({
      ...formData,
      [name]: value,
    });
    // console.log(`name:${name}, value:${value}`);
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
        <hr />
        <div>Show Data</div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, email, password }, index) => {
              //   console.log(item);
              return (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{password}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </form>
    </>
  );
};
export default Workshop5;
