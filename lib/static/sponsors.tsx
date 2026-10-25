
export interface Sponsor {
  name: string,
  logoSrc: string,
  url?: string
}

export let sponsors = [
  {
    name: "Cleveland Circuits",
    logoSrc: "/branding/cleveland/ClevelandCircuitsLogo.png",
    url: "https://www.pcb.co.uk/"
  },
    {
    name: "Connect2 Technology",
    logoSrc: "/branding/cleveland/Connect2TechnologyLogo.png",
    url: "https://connect2t.co.uk/"
  },
    {
    name: "Weyfringe",
    logoSrc: "/branding/cleveland/WeyfringeLogo.png",
    url: "https://www.weyfringe.co.uk/"
  }
 ] satisfies Sponsor[]