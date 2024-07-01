import Products from "../components/Products";

function Home() {
  return (
    <section className="p-4 bg-slate-50 min-h-screen pt-20">
      <div>
        <h2 className="text-center font-bold">Welcome to the REDUX STORE</h2>
      </div>
      <div>
        <Products />
      </div>
    </section>
  );
}

export default Home;
