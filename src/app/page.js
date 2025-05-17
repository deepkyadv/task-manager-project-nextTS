export const metadata = {
  title: "Home: Work-Manager",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center p-10 bg-white/10 border border-purple-500 backdrop-blur-md rounded-3xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Welcome to <span className="text-purple-300">Work Manager</span>
        </h1>
        <p className="text-md text-purple-200 mb-8">
          Your ultimate task management tool. Stay focused, track progress, and
          get more done.
        </p>

        <div className="flex justify-center space-x-6">
          <a
            href="/login"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold shadow"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-white/10 border border-white text-purple-200 hover:bg-white/20 px-6 py-2 rounded-lg font-semibold shadow"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
