export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md text-center">

        <h1 className="text-3xl font-bold mb-4">
          SaaS Subscription Platform
        </h1>

        <p className="text-gray-600 mb-6">
          Manage subscriptions and plans easily.
        </p>

        <div className="space-x-4">
          <a href="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Register
          </a>

          <a href="/login" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
            Login
          </a>
        </div>

      </div>

    </div>
  );
}