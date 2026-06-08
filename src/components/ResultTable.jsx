function ResultTable({contacts = []}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full">
        <thead className="border-b border-gray-200 bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium">Name</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Company</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Role</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Email</th>
            <th className="px-6 py-4 text-left text-sm font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="px-6 py-4">{contact.name}</td>
              <td className="px-6 py-4">{contact.company}</td>
              <td className="px-6 py-4">{contact.role}</td>
              <td className="px-6 py-4">{contact.email}</td>
              <td className="px-6 py-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    contact.emailStatus === "sent"
                      ? "bg-emerald-100 text-emerald-700"
                      : contact.emailStatus === "failed"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {contact.emailStatus}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
