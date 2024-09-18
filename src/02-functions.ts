
import { Colleague, EmailContact } from './myTypes';
import { colleagues } from './01-basics';
import { Friend } from './myTypes';

// Function with optional max parameter
function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number,
    max? : number
  ): EmailContact[] {
    let end = colleagues.length;
    if (max !== undefined) {
       end = max < 2 ? 1 : max
    }
    const sorted = colleagues.sort(sorter);
    const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return fullResult.slice(0,end)
  }
  // Test invocations
  console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
  console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

  // Function to add an interest to a Friend's interests array
function addInterest(friend: Friend, interest: string): string[] {
    // If the interests array is undefined, initialize it
    if (!friend.interests) {
      friend.interests = [];
    }
    // Add the new interest
    friend.interests.push(interest);
    return friend.interests;
  }
  
  // Test invocation for addInterest
  import { friends } from './01-basics';
  
  console.log(addInterest(friends[0], 'Politics'));  // Adding interest to friend1
  console.log(addInterest(friends[1], 'Art'));       // Adding interest to friend2
