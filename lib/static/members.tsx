
export interface Member {
  name: string,
  role: string,
  description: string,
  color: string
}

export let members = [
  {
    name:"Christopher Kelly-Brown",
    role:"Founder and Lead",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#8eb013"
  },
    {
    name:"Hamish Hamilton-Smith",
    role:"Head of Software",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#b01e13"
  },
    {
    name:"Alex Gorichev",
    role:"Head of Hardware",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#13b05a"
  },
    {
    name:"Dilnawa Kizghin",
    role:"Designer",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#1377b0"
  },
    {
    name:"Nathan Jackson",
    role:"3D",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#1377b0"
  },
    {
    name:"Malcolm Mathieson",
    role:"Design Lead",
    description:"This is a test because I can't be bothered to write anything. This is a test because I can't be bothered to write anything.",
    color: "#1377b0"
  },
 ] satisfies Member[];
