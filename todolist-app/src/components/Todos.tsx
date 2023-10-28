import React, { useState } from 'react';

export const Todo = () => {
    // State for tasks: an array of strings to store the list of tasks
  const [tasks, setTasks] = useState<string[]>([]);

  // State for the new task input: a string to store the text of the new task
  const [newTask, setNewTask] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<string>('');
  const [editTaskIndex, setEditTaskIndex] = useState<number | null>(null);

  // Function to add a new task
  const addTask = () => {
    // Check if the newTask string is not empty (trimmed)
    if (newTask.trim() !== '') {
      // Update the tasks state by spreading the existing tasks and adding the new task
      setTasks([...tasks, newTask]);
      // Clear the newTask input by setting it to an empty string
      setNewTask('');
    }
  };

  // Function to remove a task based on its index
  const removeTask = (index: number) => {
    // Use the filter method to create a new array of tasks without the task at the specified index
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // Update the tasks state with the filtered array, effectively removing the task
    setTasks(updatedTasks);
  };
// Function to start editing a task
const editTask = (index: number) => {
  // Set editing mode to true
  setIsEditing(true);

  // Set the edited task text to the current task's text
  setEditedTask(tasks[index]);

  // Set the index of the task being edited
  setEditTaskIndex(index);
};

// Function to update the edited task
const updateTask = () => {
  // Check if the edited task text is not empty
  if (editedTask.trim() !== '') {
    // Create a copy of the current tasks array
    const updatedTasks = [...tasks];

    // Update the task at the specified index with the edited text
    if (editTaskIndex !== null) {
      updatedTasks[editTaskIndex] = editedTask;
    }

    // Update the tasks state with the modified array
    setTasks(updatedTasks);

    // Clear the editedTask text
    setEditedTask('');

    // Reset the editTaskIndex to null to exit editing mode
    setEditTaskIndex(null);

    // Set editing mode to false
    setIsEditing(false);
  }
};






  // Render the user interface
  return (
    <div className="App mx-auto max-w-md p-4">
      <h1 className="text-3xl font-semibold mb-4">To-Do List</h1>
      <div className="flex">
        <input
          type="text"
          className="flex-grow border rounded p-2 mr-2"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            {isEditing && editTaskIndex === index ? (
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
                onBlur={updateTask}
                autoFocus
              />
            ) : (
              <span>{task}</span>
            )}
            <button className="text-red-500" onClick={() => removeTask(index)}>
              Remove
            </button>
            <button className="text-blue-500" onClick={() => editTask(index)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}