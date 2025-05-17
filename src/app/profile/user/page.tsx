const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-indigo-900 to-black flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full bg-white/10 border border-purple-500 backdrop-blur-lg rounded-3xl shadow-2xl p-10 text-white">
        {/* Welcome Heading */}
        <h1 className="text-4xl font-extrabold mb-4 text-center tracking-wide">🎉 Welcome Back!</h1>
        <p className="text-lg text-center text-purple-200 mb-6">
          You're now logged in to <span className="text-white font-semibold">Work Manager</span> – your personal task companion.
        </p>

        {/* Inspirational Message */}
        <p className="text-md text-center text-purple-300 mb-10 max-w-2xl mx-auto">
          Organize your tasks, stay focused, and accomplish more with ease. Whether it’s personal goals or project management — keep everything on track.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-black/40 p-6 rounded-xl border border-purple-400 shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">🚀 Quick Setup</h2>
            <p className="text-sm text-purple-300">
              Start by adding tasks with title, content, and priority.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-indigo-400 shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">📊 Stay Organized</h2>
            <p className="text-sm text-purple-300">
              Use status tags like <span className="italic">pending</span> or <span className="italic">done</span> to stay in control.
            </p>
          </div>

          <div className="bg-black/40 p-6 rounded-xl border border-pink-400 shadow-md hover:scale-105 transition">
            <h2 className="text-xl font-semibold mb-2">💡 Boost Productivity</h2>
            <p className="text-sm text-purple-300">
              Track your progress visually and hit daily goals like a pro.
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="bg-black/40 p-6 rounded-xl border border-purple-600 mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">🔍 How it Works</h2>
          <ul className="list-disc list-inside text-purple-300 space-y-2">
            <li>Create tasks with title, content, and status.</li>
            <li>Use the navbar to view or add tasks anytime.</li>
            <li>Update or delete tasks when needed.</li>
            <li>Enjoy clean, visual task tracking daily.</li>
          </ul>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-black/40 p-6 rounded-xl border border-indigo-500">
            <h3 className="text-xl font-semibold text-white mb-2">🧠 Mental Clarity</h3>
            <p className="text-purple-300 text-sm">
              Write down what matters. Free your mind and get more done.
            </p>
          </div>
          <div className="bg-black/40 p-6 rounded-xl border border-pink-500">
            <h3 className="text-xl font-semibold text-white mb-2">⏱️ Time Management</h3>
            <p className="text-purple-300 text-sm">
              Prioritize smartly and spend time where it truly matters.
            </p>
          </div>
        </div>

        {/* Upcoming Features */}
        <div className="bg-black/40 p-6 rounded-xl border border-purple-600 mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">🚧 Upcoming Features</h2>
          <ul className="list-disc list-inside text-purple-300 space-y-2">
            <li>Reminder notifications</li>
            <li>Task categories and filters</li>
            <li>Dark/light theme toggle</li>
            <li>Productivity analytics dashboard</li>
          </ul>
        </div>

        {/* Testimonial Quote */}
        <div className="bg-white/10 p-6 rounded-xl border border-purple-400 text-center italic text-purple-300">
          “Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.”
          <br />
          <span className="text-sm text-purple-500 mt-2 block">– Paul J. Meyer</span>
        </div>
      </div>
    </div>
  );
};

export default page;
