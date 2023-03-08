export const HeaderTextFirst = () => (
  <div className="relative flex justify-end items-center flex-col">
    <div className="w-full bg-slate-800 px-4 py-14 gap-2 flex justify-end items-center flex-col text-center">
      <h1 className="relative z-20 text-5xl font-bold text-white m-0">
        Welcome to the NML Newsletter
      </h1>
      <h2 className="relative z-20 text-xl font-bold text-rose-400 m-0">
        March 2023 Edition
      </h2>
    </div>

    <img
      src="https://images.unsplash.com/photo-1648199074391-76e5bed27d8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
      className="object-cover h-full w-full z-10"
      alt="Foo"
      style={{ height: 400 }}
    />
  </div>
);
