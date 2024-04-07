import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      ) : (
        <>
          <Header />
          <div className="text-blue-900 p-8 lg:p-0 overflow-hidden">
            <Home />
          </div>
        </>
      )}
    </>
  );
}

export default App;
