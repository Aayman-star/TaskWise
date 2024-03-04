//const BASE_URL = "http://localhost:3000";

type todo = {
  id: number;
  tasktext: string;
  is_complete: boolean;
  created_at: Date;
};

/**This function is to fetch data from the api at the backend */
export const fetchTasks = async () => {
  try {
    const response = await fetch("/api/tasks", { method: "GET" });
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const { todos } = await response.json();
    console.log(`THIS IS THE RECEIVED DAT`, todos);
    return todos;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendTask = async (taskText: string) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tasktext: taskText }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data.message);
  return data;
};

// Function to call the API and delete the todo item
export const deleteTask = async (id: number) => {
  try {
    // Call the DELETE API and pass the id as a query parameter
    const response = await fetch(`/api/tasks?id=${id}`, {
      method: "DELETE",
    });
    console.log(response);
    // Handle success (e.g., update state or UI)
  } catch (error) {
    console.error(error);
    // Handle error (e.g., display error message)
  }
};
