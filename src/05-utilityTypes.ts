
import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

// Function to update friend details using FriendPartial
function updateFriend(friend: Friend, updates: FriendPartial): Friend {
  return { ...friend, ...updates };
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}));

// Function to return secure read-only contacts
function secureFindFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
): SecureFriendContact[] {
  const matches = friends.filter(criteria);
  return matches.map((f) => {
    const secure: SecureFriendContact = {
      name: f.name,
      phone: f.phone,
    };
    return secure;
  });
}

let result = secureFindFriends(
  friends,
  (f: Friend) => f.age < 30
);
console.log(result);

// result[0].phone = '08654321'; // Error: Cannot assign to 'phone' because it is a read-only property.

// Function to generate an event pass for a colleague
function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}

console.log(generateEventPass(colleagues.current[0]));

//--------------------------------------
// The intersection function is incomplete. We'll complete it using utility types.

type FriendColleagueIntersection = Pick<Friend, 'name' | 'age'> & Pick<Colleague, 'contact'>;

function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): FriendColleagueIntersection[] {
  let result: FriendColleagueIntersection[] = [];
  
  friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      // Colleague is also a Friend, create an intersection object
      const intersectionObj: FriendColleagueIntersection = {
        name: friend.name,
        age: friend.age,
        contact: colleague.contact,
      };
      res.push(intersectionObj);
    }
    return res;
  }, result);
  
  return result;
}

console.log(intersection(friends, colleagues.current));
