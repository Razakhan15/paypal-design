import { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 5000);
  return (
    <>
      {loading ? (
        <div class="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
          <span class="sr-only">Loading...</span>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div class="h-8 w-8 bg-black rounded-full animate-bounce"></div>
        </div>
      ) : (
        <div className="text-blue-900">
          <Header />
          <Home />
        </div>
      )}
    </>
  );
}

export default App;
