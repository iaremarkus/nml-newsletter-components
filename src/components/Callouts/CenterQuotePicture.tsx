export const CenterQuotePicture = () => (
  <div className="relative text-center max-w-4xl mx-auto flex flex-col gap-4">
    <img
      src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
      alt="Pic of foobar"
      width="100%"
      style={{ maxHeight: 300 }}
      className="object-cover mb-4 mx-auto"
    />

    <h2 className="text-4xl text-slate-600 font-medium">
      <i>
        Some fancy quote about the joys of working at NML on Tuesdays before 3pm
      </i>
    </h2>
    <h4 className="text-slate-500">- Ryan Barlow</h4>
  </div>
);
