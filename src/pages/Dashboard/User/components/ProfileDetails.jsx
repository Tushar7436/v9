export default function ProfileDetails() {
    // Fetch user data from Prisma here
    const user = {
      name: "John Doe",
      email: "john.doe@example.com",
      studentId: "12345678",
      branch: "Computer Science",
      year: "3rd Year",
    }
  
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Profile Details</h3>
        <div className="space-y-2">
          <div>
            <span className="font-semibold">Name:</span> {user.name}
          </div>
          <div>
            <span className="font-semibold">Email:</span> {user.email}
          </div>
          <div>
            <span className="font-semibold">Student ID:</span> {user.studentId}
          </div>
          <div>
            <span className="font-semibold">Branch:</span> {user.branch}
          </div>
          <div>
            <span className="font-semibold">Year:</span> {user.year}
          </div>
        </div>
      </div>
    )
  }
  
  