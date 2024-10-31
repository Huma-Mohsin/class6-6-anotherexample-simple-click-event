"use client" 
{/**Error Resolved Above*/}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1 onClick={()=>{console.log("Fired Click Event At H1")}} className="text-3xl text-center text-green-600 cursor-pointer">"Hook- UseState"</h1> {/**ERROR ARISE- [ Server ] Error: Event handlers cannot be passed to Client Component props.
  <h1 onClick={function onClick} className=... children=...>
              ^^^^^^^^^^^^^^^^^^
If you need interactivity, consider converting part of this to a Client Component. */}

    <button className="text-center text-5xl bg-red-300 p-5 m-5 rounded-lg ">Click Me</button> {/**Changes not appear at server site on click but in browser site. */}

    </div>
  );
}
