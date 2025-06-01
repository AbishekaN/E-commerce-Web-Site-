import { useEffect, useState } from "react";

const AuthCallback = () => {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      // Convert URL hash fragment (#...) to query params style (?...)
      const params = new URLSearchParams(hash.replace("#", "?"));
      const error = params.get("error");
      const error_description = params.get("error_description");
      const access_token = params.get("access_token");
      const refresh_token = params.get("refresh_token");

      if (error) {
        // Show error message from URL
        setErrorMsg(decodeURIComponent(error_description || error));
        return;
      }

      if (access_token && refresh_token) {
        // TODO: set session if tokens exist (optional)
      }
    }
  }, []);

  if (errorMsg) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-lg shadow max-w-md text-center">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Authentication Error</h2>
          <p className="mb-6">{errorMsg}</p>
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default AuthCallback;
