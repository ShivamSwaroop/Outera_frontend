import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function DomainInput() {
  const [domain, setDomain] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleStart() {
    const cleanDomain = domain
      .replace(/^https?:\/\//, "")
      .replace(/^www\./, "")
      .trim();
    if (!domain.trim()) return;

    try {
      setLoading(true);

      const response = await api.post("/workflow/start", {
        domain: cleanDomain,
      });

      console.log(response.data);

      navigate(`/run/${response.data.data.campaignId}`);
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to start workflow");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto flex max-w-xl gap-3">
      <input
        type="text"
        placeholder="youtube.com"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-4 outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleStart}
        disabled={loading || !domain.trim()}
        className="rounded-xl bg-indigo-600 px-6 py-4 font-medium text-white transition hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Starting..." : "Start Pipeline"}
      </button>
    </div>
  );
}

export default DomainInput;
