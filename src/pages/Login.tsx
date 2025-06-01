import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }
      }
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      alert("Logged in successfully!");
      // TODO: Redirect or update app state
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-yellow-50 p-6">
      <div className="bg-white backdrop-blur-sm rounded-2xl p-10 shadow-lg max-w-md w-full border border-orange-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <label className="block relative">
            <Mail className="absolute left-3 top-3 text-orange-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </label>

          <label className="block relative">
            <Lock className="absolute left-3 top-3 text-yellow-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </label>

          {error && <p className="text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-transform hover:scale-105"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <a href="/signup" className="text-orange-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login; 
