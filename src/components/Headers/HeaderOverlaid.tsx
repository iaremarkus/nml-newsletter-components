/* eslint-disable @next/next/no-img-element */

export const HeaderOverlaid = () => (
  <div style={{ height: 300 }} className="overflow-hidden relative flex justify-end items-end flex-col">
    <img
      src="https://images.unsplash.com/photo-1648199074391-76e5bed27d8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
      className="object-cover h-full w-full absolute z-10"
      alt="Foo"
    />

    <h1 className="relative z-20 p-2 text-3xl font-bold text-white mr-8 bg-slate-900 bg-opacity-50">
      Welcome to the NML Newsletter
    </h1>
    <h2 className="relative z-20 p-2 text-sm font-bold text-white mr-8 mb-8 bg-pink-900 bg-opacity-80">
      March 2023 Edition
    </h2>
  </div>
);
