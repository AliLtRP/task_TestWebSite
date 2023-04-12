import React, { useEffect, useState } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setData(response.data);
    }, []);
  });

  return (
    <div className="usersSet">
      <div className="users">
        {data &&
          data.map((user) => (
            <div className="user">
              <li>{user.name}</li>
            </div>
          ))}
      </div>
    </div>
  );
}

export default About;
