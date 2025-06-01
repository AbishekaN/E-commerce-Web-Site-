import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);

      // Redirect to login after 2 seconds
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-yellow-50 p-6">
      <div className="bg-white backdrop-blur-sm rounded-2xl p-10 shadow-lg max-w-md w-full border border-orange-200">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
          Create a New Account
        </h2>

        {success ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            Signup successful! Redirecting to login...
          </div>
        ) : (
          <form onSubmit={handleSignup} className="space-y-6">
            <label className="block relative">
              <User className="absolute left-3 top-3 text-orange-500" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </label>

            <label className="block relative">
              <Mail className="absolute left-3 top-3 text-yellow-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              />
            </label>

            <label className="block relative">
              <Lock className="absolute left-3 top-3 text-orange-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </label>

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-yellow-600 transition-transform hover:scale-105"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
        )}

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-yellow-500 font-semibold hover:underline">
            Log in
          </a>
        </p>
      </div>
    </section> 
  );
};
 
export default Signup;   
