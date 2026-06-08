function SummaryCard({title, value, subtitle}){
    return(
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="mt-2 text-3xl font-bold">{value}</h2>
        {subtitle && (
            <p className="mt-2 text-sm text-gray-500">{subtitle}</p>)}
        </div>
    )
}
export default SummaryCard;