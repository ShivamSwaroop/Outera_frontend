import { useEffect } from "react";
import Navbar from "../components/Navbar";
import PipelineProgress from "../components/PipelineProgress";
import StepCard from "../components/StepCard";
import useSocket from "../hooks/useSocket";
import { useParams, useNavigate } from "react-router-dom";

function Pipeline() {
  const { campaignId } = useParams();
  const navigate = useNavigate();
  const { workflow, connected } = useSocket(campaignId);

  const progress = workflow?.progress || 0;
  const stage = workflow?.stage;

  useEffect(() => {
    if (workflow?.progress === 100) {
      setTimeout(() => {
        navigate(`/results/${campaignId}`);
      }, 1500);
    }
  }, [workflow, campaignId, navigate]);

  const steps = [
    {
      title: "Company Discovery",
      description:
        stage === "company_discovery"
          ? workflow?.message
          : "Finding similar companies",

      status:
        progress >= 30
          ? "completed"
          : stage === "company_discovery"
            ? "running"
            : "pending",
    },

    {
      title: "Decision Makers",
      description:
        stage === "prospeo_contacts"
          ? workflow?.message
          : "Finding decision makers",

      status:
        progress >= 50
          ? "completed"
          : stage === "prospeo_contacts"
            ? "running"
            : "pending",
    },

    {
      title: "Email Verification",
      description:
        stage === "prospeo_emails"
          ? workflow?.message
          : "Verifying work emails",

      status:
        progress >= 75
          ? "completed"
          : stage === "prospeo_emails"
            ? "running"
            : "pending",
    },

    {
      title: "Completed",
      description:
        stage === "completed"
          ? workflow?.message
          : "Waiting for workflow completion",

      status:
        progress === 100
          ? "completed"
          : stage === "completed"
            ? "running"
            : "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="mb-2 text-3xl font-bold">Campaign Pipeline</h1>

        <p className="mb-8 text-gray-600">Running outreach workflow...</p>

        <div className="mb-4">
          <span
            className={`rounded-full px-3 py-1 text-sm ${
              connected
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {connected ? "Socket Connected" : "Socket Disconnected"}
          </span>
        </div>

        <PipelineProgress completed={progress} total={100} />

        <div className="space-y-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Pipeline;
