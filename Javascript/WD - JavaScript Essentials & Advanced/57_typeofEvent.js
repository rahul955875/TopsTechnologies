/* // Q.57 how many type of JS Event? How to use it ?

In JavaScript, events are actions or occurrences that happen in the browser window, which the browser can respond to. They are used to handle user interactions like clicking a button, hovering over an element, typing in a text field, and more. There are many types of JavaScript events, categorized based on the element they apply to.

Common Types of JavaScript Events:
Mouse Events:

click: Triggered when an element is clicked.
dblclick: Triggered when an element is double-clicked.
mouseover: Triggered when the mouse pointer moves over an element.
mouseout: Triggered when the mouse pointer moves out of an element.
mousedown: Triggered when a mouse button is pressed on an element.
mouseup: Triggered when a mouse button is released over an element.
mousemove: Triggered when the mouse pointer is moving over an element.
Keyboard Events:

keydown: Triggered when a key is pressed.
keyup: Triggered when a key is released.
keypress: Triggered when a key is pressed down and the character gets typed (obsolete in modern browsers, better to use keydown).
Form Events:

submit: Triggered when a form is submitted.
change: Triggered when the value of a form element changes (like input, select, textarea).
focus: Triggered when an element gains focus.
blur: Triggered when an element loses focus.
input: Triggered when the user enters input into an element.
Window Events:

load: Triggered when the entire page has loaded, including all dependent resources (images, scripts, etc.).
unload: Triggered when the document is being unloaded (before closing the window).
resize: Triggered when the browser window is resized.
scroll: Triggered when the user scrolls the content of an element or the page.
Touch Events (for mobile devices):

touchstart: Triggered when a touch is initiated.
touchmove: Triggered when a finger is dragged across the screen.
touchend: Triggered when a touch is removed.
Clipboard Events:

copy: Triggered when copying content.
cut: Triggered when cutting content.
paste: Triggered when pasting content.
Media Events:

play: Triggered when media (audio or video) begins to play.
pause: Triggered when media is paused.
ended: Triggered when media playback ends.

How to Use Events in JavaScript:
JavaScript provides different ways to attach event handlers (functions that are executed when an event occurs) to elements.

1.using inline event handlers
<button onclick="alert('Button clicked!')">Click Me</button>
2. using dom property
<button id="myButton">Click Me</button>

<script>
    document.getElementById('myButton').onclick = function() {
        alert('Button clicked!');
    };
</script>

3.using addEventlistner method
*/
  const button = document.getElementById('myButton');

    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });