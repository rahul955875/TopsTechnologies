/* // Q.61 Array vs object defences in JS?

Arrays vs. Objects
Definition:

Array: An ordered collection of items, accessed by numeric indices.
Object: A collection of key-value pairs, accessed by keys.
Syntax:

Array: const fruits = ["apple", "banana"];
Object: const person = { name: "John", age: 30 };
Access:

Array: fruits[0] (output: "apple")
Object: person.name or person["age"] (output: "John" or 30)
Order:

Array: Maintains order of elements.
Object: No guaranteed order of properties (though most modern engines maintain insertion order).
Methods:

Array: Uses methods like push(), map(), filter().
Object: Uses methods like Object.keys(), Object.values().
Use Cases:

Array: Best for lists where order matters (e.g., a list of names).
Object: Best for entities with named properties (e.g., a person's details).
Summary
Arrays are for ordered collections; objects are for structured data with named keys. Use arrays for lists and objects for entities. */
console.log("array vs object")