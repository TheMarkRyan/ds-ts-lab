// src/04-generics.ts

import { friends, colleagues } from './01-basics';
import { Friend, Colleague } from './myTypes';

// Generic findMatch function
function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}

// Test the findMatch function
console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')));
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'));

// Generic sort function
function sort<T>(data: T[], sorter: (a: T, b: T) => number): T[] {
  return [...data].sort(sorter); // Return a sorted copy of the array
}

// Test the sort function

// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));

// Sort colleagues by extension number
console.log(
  sort<Colleague>(
    colleagues.current,
    (a, b) => a.contact.extension - b.contact.extension
  )
);
