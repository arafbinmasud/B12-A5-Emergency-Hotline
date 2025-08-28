Answer to the Questions: 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
  These all are methods in JavaScript to access HTML elements. getElementById is used to access a unique HTML element, and it returns a single element. getElementsByClassName returns an HTMLCollection, which looks like an array but is not exactly an array. querySelector and querySelectorAll return a NodeList, which is also like an array but not exactly an array. They access HTML elements using CSS selectors like class, id, or tag names. The difference between these two is that querySelectorAll selects all matching elements, while querySelector only selects or accesses the first matching element.   


2. How do you create and insert a new element into the DOM?

Answer: 
  First of all, I will use the createElement method to create a new HTML element. Like this: const newDiv = document.createElement('div'). Then I will select a parent element to keep the newly created element inside that parent. Like this: const newDivContainer = document.getElementById('section1'). Then I will add the new div to this parent container using the appendChild method. Like this: newDivContainer.appendChild(newDiv). Using these steps I can create and insert a new element into the DOM.


3. What is Event Bubbling and how does it work?

Answer:
  Event Bubbling is like going up from the bottom of an element in the DOM. We know that the DOM is like an upside-down tree where all elements are placed inside one another. So basically, event bubbling means the event goes from the youngest child to its parent, then to the parent’s parent, and so on, up the tree. By default, all events in JavaScript bubble in this way unless we stop it using event.stopPropagation(). 


4. What is Event Delegation in JavaScript? Why is it useful? 

Answer:
  Event Delegation means delegating or using the parent for event handling instead of its child. If I want the same event handling for every child, then instead of adding an event handler for each child element, I can just add the event handler to the parent. I can know which child has triggered the event with the help of (event.target).
  It is useful because it allows me to write less code, and if I add any element dynamically, that element can also get the event handler in this way.
  

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: 
  preventDefault() method is used to prevent the default behavior of an event. For example, if a user clicks on a button inside a form tag and the type of the button is 'submit', then the default behavior of the event is to reload the page. But we can prevent that by using the preventDefault() method.
  On the other hand, stopPropagation() method is related to event bubbling. We know that the default behavior of all events in JavaScript is to go to the parent elements ultimately. But by using this method, we can prevent that. The event cannot go to its parent if we use stopPropagation() method. 







