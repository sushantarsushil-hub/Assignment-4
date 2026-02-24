1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById() → Selects one element by its unique id.
getElementsByClassName() → Selects multiple elements that share the same class (returns a live HTMLCollection).
querySelector() / querySelectorAll() → Selects elements using CSS selectors (querySelector = first match, querySelectorAll = all matches).

2. How do you create and insert a new element into the DOM?
Ans. Create an element using document.createElement().
Add text or attributes to it.
Insert it into the page using appendChild() or append().

3. What is Event Bubbling? How does it work?
Ans. Event bubbling means an event starts from the target element and moves upward to its parent elements.
For example, clicking a button also triggers click events on its parent div, then body, then document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans. Event delegation means adding one event listener to a parent element instead of many child elements.
It is useful because it improves performance and works even for dynamically added elements.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans. preventDefault() stops the browser’s default behavior (like stopping a form from submitting).
stopPropagation() stops the event from bubbling up to parent elements.
