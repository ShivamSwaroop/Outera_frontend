import Navbar from "../components/Navbar";
import ResultTable from "../components/ResultTable";
import SummaryCard from "../components/SummaryCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Results() {
  const [campaign, setCampaign] = useState(null);
  const { campaignId } = useParams();

  useEffect(() => {
    async function loadCampaign() {
        try{
      const response = await api.get(`/workflow/${campaignId}`);

      setCampaign(response.data.data);
        }catch(error){
            console.error(error);
        }
    }

    loadCampaign();
  }, [campaignId]);

  if (!campaign) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Campaign Results</h1>
          <p className="mt-2 text-gray-600">Outreach pipeline summary</p>
        </div>
        <div className="mb-10 grid gap-6 md:grid-cols-4">
          <SummaryCard title="Companies" value={campaign.stats?.companiesFound || 0}/>

          <SummaryCard title="Contacts" value={campaign.stats?.contactsFound || 0} />

          <SummaryCard title="Verified Emails" value={campaign.stats?.verifiedEmails || 0} />

          <SummaryCard title="Emails Sent" value={campaign.stats?.emailsSent || 0} />
        </div>
        <ResultTable contacts={campaign.contacts}/>
      </main>
    </div>
  );
}
export default Results;
