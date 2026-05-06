const { Parser } = require("json2csv");

const exportToCSV = (users) => {
  const fields = [
    { label: "ID", value: "_id" },
    { label: "First Name", value: "firstName" },
    { label: "Last Name", value: "lastName" },
    { label: "Email", value: "email" },
    { label: "Mobile", value: "mobile" },
    { label: "Gender", value: "gender" },
    { label: "Status", value: "status" },
    { label: "Location", value: "location" },
    { label: "Created At", value: "createdAt" },
    { label: "Updated At", value: "updatedAt" },
  ];

  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(users);

  return csv;
};

module.exports = { exportToCSV };
