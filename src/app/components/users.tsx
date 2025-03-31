import { useUsers } from "../utils/hooks/userUsers"

export default function Users() {
  const { data: users } = useUsers();

  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="text-white text-3xl">Fetched Users by using Tanstack Query</h2>

      <div className="grid grid-cols-1 gap-5 w-full md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div
            key={user.id}
            className="border border-gray-300 rounded-xl text-white p-4"
          >
            <p className="text-center">{user.name}</p>
            <div className="flex gap-2.5">
              <p className="font-medium">Email:</p>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="flex gap-2.5">
              <div className="flex gap-2.5">
                <p className="font-medium">Company name:</p>
                <p className="text-gray-400">{user.company.name}</p>
              </div>
            </div>
            <div className="flex gap-2.5">
              <p className="font-medium">Phone:</p>
              <p className="text-gray-400">{user.phone}</p>
            </div>
            <div className="flex gap-2.5">
              <p className="font-medium">Website:</p>
              <p className="text-gray-400">{user.website}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}