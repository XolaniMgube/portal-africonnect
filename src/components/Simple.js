import { useState } from "react";

const Simple = () => {
  const [details, setDetails] = useState({
    item: "",
    quantity: "",
    amount: "",
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setDetails((previousValues) => {
      return { ...previousValues, [inputName]: inputValue };
    });
    // console.log(details)
  };

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(details);
  };

  return (
    <div>
      <form className="row">
        <div className="col-6">
          <div className="input-group mb-3 row">
            <label className="col-3">Item: </label>
            <select
              className="form-select form-control"
              name="item"
              onChange={handleChange}
            >
              <option selected></option>
              <option value="copy">Copy</option>
              <option value="print">Print</option>
              <option value="scan">Scan</option>
              <option value="email">Email</option>
              <option value="internet">Internet</option>
              <option value="photos">ID Photos</option>
            </select>
          </div>
          <div className="input-group mb-3 row">
            <label className="col-3">Quantity: </label>
            <input
              className="form-control"
              type="text"
              name="quantity"
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-group mb-3 row">
            <label className="col-3" htmlFor="">
              Amount:{" "}
            </label>
            <input
              className="form-control"
              type="text"
              name="amount"
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-group mb-3">
            <button className="btn btn-success" onClick={handleAdd}>
              Add Item
            </button>
          </div>
        </div>
      </form>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Quantity</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.item}</td>
              <td>{details.quantity}</td>
              <td>R{details.amount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Simple;
