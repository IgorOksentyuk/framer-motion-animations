import { User } from "@/app/types/user";
import { useQuery } from "@tanstack/react-query";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

async function fetchUsers() {
  try {
    const response = await fetch(USERS_URL);

    if (!response) {
      throw new Error("Failed to fetch users");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const useUsers = () => {
  return useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => fetchUsers()
  })
}