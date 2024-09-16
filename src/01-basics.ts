interface Friend {
  name: string;
  phone: string;
  age: number
}

const friend1 = {
    name: "Gjorgi Gjorgiev",
    phone: "086-8953251",
    age: 22,
  };
  
  const friend2 = {
    name: "Jay Langford",
    phone: "086--12345",
    age: 31,
  };
  
  const friends = [friend1, friend2];
  console.log(friends[1]);
  
  //   -------------------
  
  interface ContactInfo {
    email: string;
    extension: number;
  }
  
  interface Colleague {
    name: string;
    department: string;
    contact: ContactInfo;
  }
  
  const colleague1: Colleague = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: Colleague = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: Colleague = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  
  export const colleagues : ColleagueHistory = {
    current: [colleague1, colleague2, colleague3],
    former: [],
  };
  
  console.log(colleagues.current[0]);
  
  interface ColleagueHistory {
    current: Colleague[],
    former: Colleague[]
  }
  