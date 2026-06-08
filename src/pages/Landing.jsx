import Navbar from "../components/Navbar";
import DomainInput from "../components/DomainInput"

function Landing() {
    return(
        <div className="min-h-screen bg-[#FAFAFA]">
            <Navbar/>
            <main className="flex min-h-[85vh] items-center justify-center px-6">
                <div className="max-w-3xl text-center">
                    <h1 className="text-6xl font-bold tracking-tight">
                        Find Prospects.
                        <br/>
                        Launch Outreach.</h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Discover similar companies, enrich contacts,verify emails and launch outreach
                        from a single company domain.</p>
                    <div className="mt-10">
                        <DomainInput/>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Landing;