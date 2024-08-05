/**This file contains all client side api calls to the backend */

type todo = {
  id: number;
  user_id?: string;
  tasktext: string;
  is_complete: boolean;
  created_at?: Date;
};

/**This function is to fetch data from the api at the backend */
export const fetchTasks = async (user_id: string) => {
  try {
    const response = await fetch(`/api/tasks?user_id=${user_id}`, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    /**Extracting the todos array from the received data */
    const { todos } = await response.json();
    // console.log(`THIS IS THE RECEIVED DAT`, todos);
    return todos;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendTask = async (user_id: string, taskText: string) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user_id: user_id, tasktext: taskText }),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  console.log(data.message);
  return data;
};

export const deleteTaskFromDb = async (id: number, user_id: string) => {
  console.log("IN THE DATA FILE", id);
  try {
    const response = await fetch(`/api/tasks?id=${id}&user_id=${user_id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Message === "Data deleted successfully") {
      console.log("Task deleted successfully");
    } else {
      console.error(data.Message);
    }
  } catch (error) {
    console.error(error);
  }
};

// Function to toggle the 'is_complete' status of a task
export const toggleTaskCompletion = async (task: todo) => {
  try {
    const response = await fetch(`/api/tasks`, {
      // Replace '/api/task' with your actual API route
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Include the created_at property from the task object
        id: task.id,
        user_id: task.user_id,
        tasktext: task.tasktext,
        is_complete: task.is_complete,
        created_at: task.created_at,
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    // console.log(result.message, result.data); // Log the message from the server
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
