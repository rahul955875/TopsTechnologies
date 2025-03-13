# Assignment Answers  

## **Question 1: What do you mean by RESTful web services?**  
- RESTful web services follow the **REST (Representational State Transfer)** architecture.  
- They use **HTTP methods** like **GET, POST, PUT, PATCH, DELETE** for communication.  
- Data is usually exchanged in **JSON** or **XML** format.  
- They are **stateless**, meaning each request from a client contains all the necessary information.  
- Commonly used for building **scalable and maintainable web APIs**.  

---

## **Question 2: What is Json-Server? How do we use it in React?**  
- **JSON Server** is a simple tool to create a **mock API** using a JSON file as a database.  
- It allows frontend developers to test API requests without a real backend.  
- To install and run JSON Server:  
  ```sh
  npm install -g json-server
  json-server --watch db.json --port 3000
  ```  
- In React, we use `fetch()` or `axios` to interact with JSON Server:  
  ```js
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
  ```

---

## **Question 3: How do you fetch data from a JSON-server API in React? Explain fetch() or axios().**  
- **Fetching data from JSON Server API:**  
  - Use the **fetch API** (built-in JavaScript method) or **Axios** (a popular HTTP client).  
  - Both help in making API requests and handling responses.  

- **Using `fetch()` in React:**  
  ```js
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  ```  

- **Using `axios` in React:**  
  ```js
  import axios from "axios";
  useEffect(() => {
    axios.get("http://localhost:3000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);
  ```  

- **Role of `fetch()` and `axios()`:**  
  - Both help send and receive data from APIs.  
  - `fetch()` is built-in but needs manual JSON conversion.  
  - `axios` is a third-party library with automatic JSON handling and better error handling.

---

## **Question 4: What is Firebase? What features does Firebase offer?**  
- **Firebase** is a **backend-as-a-service (BaaS)** provided by Google.  
- It helps developers build apps without managing backend infrastructure.  
- Features of Firebase:  
  1. **Firebase Authentication** – Supports Google, Facebook, Email, etc.  
  2. **Firestore & Realtime Database** – NoSQL databases for real-time data storage.  
  3. **Firebase Hosting** – Deploy web apps easily with a global CDN.  
  4. **Cloud Functions** – Serverless backend logic execution.  
  5. **Firebase Cloud Messaging (FCM)** – Push notifications for apps.  
  6. **Crashlytics** – Real-time error tracking and reporting.  
  7. **Firebase Analytics** – Tracks user engagement and app performance.  

---

## **Question 5: Importance of handling errors and loading states in React APIs**  
- Handling errors and loading states improves **user experience** and **application reliability**.  
- **Why is it important?**  
  - Prevents the app from crashing when the API fails.  
  - Helps display meaningful messages to the user (e.g., "Failed to load data").  
  - Shows a loading indicator while data is being fetched.  

- **Example of Handling Loading & Errors in React:**  
  ```js
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <ul>{data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>}
    </div>
  );
  ```  
- **Key takeaways:**  
  - **Loading state (`loading`)** shows a message while fetching data.  
  - **Error state (`error`)** catches and displays API request failures.  
  - **Data state (`data`)** updates the UI once the request is successful.  

---

