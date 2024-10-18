/* // Q.60 What is Bom vs Dom in JS?

In JavaScript, both BOM (Browser Object Model) and DOM (Document Object Model) are important concepts that allow interaction with the browser and web pages. However, they serve different purposes and represent different parts of a webpage's environment.

1. DOM (Document Object Model)
The DOM is an interface that represents the structure of an HTML or XML document as a tree of objects. It allows JavaScript to interact with and manipulate the content, structure, and style of the webpage dynamically. Each element in the HTML document becomes an object in the DOM, which can be accessed and modified using JavaScript.

Key features of DOM:
Representation of HTML: The DOM represents the document’s structure as a tree of nodes (such as <div>, <p>, <a>, etc.), each corresponding to elements in the HTML.
Interaction: JavaScript can be used to create, modify, or delete elements in the DOM.
Events: The DOM is event-driven, meaning that you can use JavaScript to listen for and respond to events (like clicks, key presses, etc.) on the page.
Example of using the DOM:

<html>
<body>
  <p id="demo">This is a paragraph.</p>
  <button onclick="changeText()">Click me</button>

  <script>
    function changeText() {
      document.getElementById("demo").innerHTML = "Paragraph changed!";  // Modifies the DOM
    }
  </script>
</body>
</html>
In the example above, the DOM allows JavaScript to find the element with the ID demo and modify its content when the button is clicked.

Common DOM Methods:
document.getElementById()
document.querySelector()
document.createElement()
element.appendChild()
element.innerHTML
2. BOM (Browser Object Model)
The BOM is an interface that allows JavaScript to interact with the browser itself, outside of the page content (i.e., not directly related to the document structure). It represents the browser environment, such as the browser window, navigator, screen, history, and location.

The BOM allows JavaScript to perform tasks like:

Manipulating the browser window (resizing, opening new tabs/windows).
Accessing and modifying the URL or redirecting the page.
Working with browser cookies, history, and other browser-specific features.
Key features of BOM:
Browser interaction: The BOM represents various properties and methods that control the browser itself.
Window object: The BOM is centered around the window object, which represents the browser window or tab.
Components of BOM: It includes objects like window, location, history, navigator, screen, etc.
Example of using BOM:
js
Copy code
// Redirect the browser to another URL
window.location.href = "https://www.example.com";

// Get the browser's history
console.log(window.history.length);

// Get browser information
console.log(window.navigator.userAgent);
Common BOM Objects and Methods:
window: Represents the browser window. It is the global object that all JavaScript in the browser runs within.
location: Represents the URL of the current document. Methods like location.href and location.reload() help navigate or reload pages.
history: Represents the browser's session history. Methods like history.back() and history.forward() allow navigation through the browser history.
navigator: Provides information about the browser and the user's environment (such as browser type, version, and platform).
screen: Contains information about the user's screen (such as screen width and height). */
console.log("Dom vs Bom")