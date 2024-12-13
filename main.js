import { LinkedList } from "./linkedlist.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("turtle");


console.log(list.toString());

console.log(list.size);

console.log(list.head());

console.log(list.tail());

console.log(list.at(4));
console.log(list.at(1));
console.log(list.at(6));
console.log(list.at(7));
console.log(list.at(-3));

console.log(list.pop());
console.log(list.toString());
console.log(list.size);

console.log(list.contains("dog"));
console.log(list.contains("turtle"));
console.log(list.contains("cat"));
console.log(list.contains("parrot"));
console.log(list.contains("hamster"));
console.log(list.contains("snake"));

console.log(list.find("dog"));
console.log(list.find("turtle"));
console.log(list.find("cat"));
console.log(list.find("parrot"));
console.log(list.find("hamster"));
console.log(list.find("snake"));

console.log(list.insertAt("snake", 4));
console.log(list.toString());
console.log(list.size);

console.log(list.removeAt(4));
console.log(list.toString());
console.log(list.size);