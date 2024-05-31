import Calculator from "./components/Calculator";

function App() {
  return (
    <main className="flex flex-col w-full min-h-[70vh] items-center justify-center">
      <div className="container mx-auto w-full lg:w-1/2">
        <Calculator />
      </div>
    </main>
  );
}

export default App;
