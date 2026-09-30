
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
    description:"More info coming soon!",
    color: "#8eb013"
  },
    {
    name:"Hamish Hamilton-Smith",
    role:"Head of Software",
    description:"More info coming soon!",
    color: "#b01e13"
  },
    {
    name:"Alex Gorichev",
    role:"Head of Hardware",
    description:"More info coming soon!",
    color: "#13b05a"
  },
    {
    name:"Malcolm Mathieson",
    role:"Design Lead",
    description:"More info coming soon!",
    color: "#1377b0"
  },
    {
    name:"Dilnawa Kizghin",
    role:"Design Specialist",
    description:"More info coming soon!",
    color: "#1377b0"
  },
    {
    name:"Nathan Jackson",
    role:"Design Specialist",
    description:"More info coming soon!",
    color: "#1377b0"
  },
 ] satisfies Member[];
