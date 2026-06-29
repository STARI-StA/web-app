import { bungee } from "../fonts";


export default function Meridian() {
  return (
    <div className={`${bungee.className} h-full antialiased prose prose-headings:font-bold prose-p:font-semibold prose-sm md:prose-2xl relative left-0 top-0 py-16 px-16 md:px-60 w-full`}>
      <h1>
        Introducing<br/>Meridian <span className="animate-blink">|</span>
      </h1>
      <figure>
        <img src="public/branding/rocket.png"></img>
      </figure>
      <p>St Andrew's premier rocket development project.</p>
    </div>
  );
}