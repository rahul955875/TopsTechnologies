# React Router Interview Questions

## Question 1: What is React Router? How does it handle routing in single-page applications (SPAs)?

### What is React Router?
React Router is a **library for handling navigation** in React applications. It allows developers to create **single-page applications (SPAs)** with multiple views without requiring full page reloads.  

### How does React Router handle routing in SPAs?
- **Client-Side Routing:** Unlike traditional websites where clicking a link sends a request to the server for a new page, React Router **updates the URL and renders components dynamically** without reloading the page.  
- **Virtual DOM Rendering:** When the URL changes, React Router detects the change and **renders the appropriate component** while keeping the app state intact.  
- **Uses Browser History API:** It modifies the browser's history (`pushState` & `replaceState`), allowing smooth navigation and enabling the back/forward buttons.  
- **Dynamic Routing:** It allows defining routes based on conditions, parameters (`:id`), and lazy loading.  

### Example of React Router in a SPA:
```jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```
Here, React Router manages the navigation between **Home** and **About** components **without reloading the page**.

---

## Question 2: Difference Between BrowserRouter, Route, Link, and Switch Components in React Router

| Component       | Purpose |
|----------------|---------|
| **BrowserRouter** | Provides the routing functionality by wrapping the entire app. Uses the **History API** for navigation. |
| **Route** | Defines the **path-to-component** mapping. When the URL matches the `path`, the associated component is rendered. |
| **Link** | Used for navigation **without reloading the page**, replacing traditional `<a>` tags. |
| **Switch (React Router v5)** | Ensures that only **one route** is rendered at a time. In **React Router v6**, it has been replaced by `<Routes>`. |

### Example Usage of Each Component:
```jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Key Takeaways:
- **`BrowserRouter`** wraps the entire application to enable routing.  
- **`Route`** maps a URL path to a component.  
- **`Link`** prevents page reloads and enables smooth navigation.  
- **`Switch` (React Router v5) or `Routes` (React Router v6)** ensures only one route is rendered at a time.  

🚀 **Modern React Router (v6) uses `Routes` instead of `Switch`.**

