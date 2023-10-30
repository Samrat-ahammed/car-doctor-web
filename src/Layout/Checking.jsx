import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ChakingTable from "../componants/ChakingTable";
import axios from "axios";

const Checking = () => {
  const { user } = useContext(AuthContext);
  const [checking, setChecking] = useState([]);
  const url = `http://localhost:5000/checking?email=${user.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setChecking(res.data);
    });
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setChecking(data);
    //   });
  }, [url]);
  const handleDelete = (id) => {
    const proceed = confirm("are u sure to want to delete?");

    if (proceed) {
      fetch(`http://localhost:5000/checking/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("delete successfully");

            const remaining = checking.filter((items) => items._id !== id);
            setChecking(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`http://localhost:5000/checking/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount > 0) {
          const remaining = checking.filter((items) => items._id !== id);
          const update = checking.find((item) => item._id === id);
          update.status = "confirm";
          const newChecking = [update, ...remaining];
          setChecking(newChecking);
        }
      });
  };
  return (
    <div>
      <h2>{checking.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>services</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {checking?.map((item) => (
              <ChakingTable
                key={item._id}
                item={item}
                handleDelete={handleDelete}
                handleConfirm={handleConfirm}
              ></ChakingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checking;
