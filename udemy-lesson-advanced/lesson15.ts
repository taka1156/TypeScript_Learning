type EnginnerType = {
  name: string;
  role: string;
};

type BloggerType = {
  name: string;
  follower: string;
};

type EnginnerBloggerType = EnginnerType & BloggerType;

interface EnginnerIf {
  name: string;
  role: string;
}

interface BloggerIf {
  name: string;
  follower: number;
}

interface EnginnerBloggerIf extends EnginnerIf, BloggerIf {}


const quill: EnginnerBloggerIf = {
    name: 'Quil',
    role: 'frontend',
    follower: 100
}

type NumberBoolean = number| boolean;
type StringNumber = string| number;
type Mix = NumberBoolean & StringNumber; 


console.log('=== result: intersection(交差型)===');
