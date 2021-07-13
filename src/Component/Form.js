import React, { useEffect, useState } from "react";
import "../style/Form.css";
const Form = () => {
  const [value, setValue] = useState({
    name: "",
    age: "",
    salary: "",
    image: "",
  });
  const [Item, setItem] = useState([]);
  const { name, age, salary } = value;
  const onChangeName = (e) => {
    setValue({ ...value, name: e.target.value });
  };
  const onChangeage = (e) => {
    setValue({ ...value, age: e.target.value });
  };
  const onChangesalary = (e) => {
    setValue({ ...value, salary: e.target.value });
  };
  const onChangeimage = (name) => (e) => {
    const values = e.target.files[0];
    setValue({ ...value, [name]: values });
  };
  const addDetails = () => {
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...value,
        count: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const loadDetails = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(value);
    addDetails();
  };

  useEffect(() => {
    setItem(loadDetails());
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div>
          <label>Employee Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={onChangeName}
          />
        </div>
        <div>
          <label>Employee Age</label>
          <input
            type="text"
            className="form-control"
            value={age}
            onChange={onChangeage}
          />
        </div>
        <div>
          <label>Employee Salary</label>
          <input
            className="form-control"
            value={salary}
            onChange={onChangesalary}
          />
        </div>
        <div>
          <label style={{ marginLeft: "5%" }}>Employee Image </label>
          <input
            onChange={onChangeimage("photo")}
            type="file"
            name="photo"
            accept="image"
            placeholder="choose a file"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>
        {Item.map((item) => {
          return (
            <div style={{ marginTop: "2%" }}>
              <table id="students">
                <tr></tr>
                <tr>
                  <th>
                    <img src=" " />
                  </th>
                  <th>{item.name}</th>
                  <th>{item.age}</th>
                  <th>{item.salary}</th>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Form;
