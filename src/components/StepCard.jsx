import { CheckCircle, Loader2, Circle, AlertCircle } from "lucide-react";

const statusConfig = {
    pending:{
        icon: Circle,
        color: "text-gray-400",
        bg: "bg-gray-50"
    },
    running:{
        icon: Loader2,
        color: "text-indigo-600",
        bg: "bg-indigo-50"
    },
    completed: {
        icon: CheckCircle,
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    failed: {
        icon: AlertCircle,
        color: "text-red-600",
        bg: "bg-red-50"
    }
};

function StepCard({title, description, status, count}){

    const config = statusConfig[status];
    const Icon = config.icon;
    return(
        <div className={`rounded-2xl border border-gray-200 p-6 transition-all ${config.bg}`}>
            <div className="flex items-start justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-400">{description}</p>
                    {count !== undefined && (
                        <p className="mt-4 text-sm font-medium">{count} records found</p>
                    )}
                </div>
                <Icon className={`h-6 w-6 ${config.color} ${status === "running"? "animate-spin":""}`}/>
            </div>
        </div>
    )
}
export default StepCard