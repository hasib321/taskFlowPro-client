const UserTypesSection = () => {
  // Sample user types based on the requirement
  const userTypes = [
    {
      id: 1,
      type: "Developers",
      description: "Streamline task management for development projects.",
    },
    {
      id: 2,
      type: "Corporate Professionals",
      description:
        "Organize tasks and collaborations within corporate settings.",
    },
    {
      id: 3,
      type: "Bankers",
      description:
        "Manage tasks related to financial analysis, reporting, etc.",
    },
    // Add more user types as needed
  ];

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">User Types and Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {userTypes?.map((userType) => (
          <div key={userType.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{userType.type}</h3>
            <p className="text-gray-600">{userType.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTypesSection;
