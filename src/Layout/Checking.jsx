import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import ChakingTable from "../componants/ChakingTable";

const Checking = () => {
  const { user } = useContext(AuthContext);
  const [checking, setChecking] = useState([]);
  const url = `http://localhost:5000/checking?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChecking(data);
      });
  }, [url]);

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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {checking?.map((item) => (
              <ChakingTable key={item._id} item={item}></ChakingTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Checking;
