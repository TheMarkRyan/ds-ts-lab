
export interface Friend {
    name: string;
    phone: string;
    dob?: Date;  // Optional Date of Birth
    age: number;
    interests?: string[];  // Optional array of interests
  }
  
  export interface ContactInfo {
    email: string;
    extension: number;
  }
  
  export interface Colleague {
    name: string;
    department: string;
    contact: ContactInfo;
  }
  
  export interface ColleagueHistory {
    current: Colleague[];
    former: Colleague[];
  }
  
  export interface EmailContact {
    name: string;
    email: string;
  }
  