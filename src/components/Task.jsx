import { useEffect, useState } from 'react';

// eslint-disable-next-line react/prop-types
const Task = ({ id }) => {
  const [taskName, setTaskName] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (taskName === null) {
      const storedName = sessionStorage.getItem(`task-${id}`);
      
      // Set default task name if it's not in sessionStorage
      const defaultName = `Task #${id + 1}`;
      if (!storedName) {
        sessionStorage.setItem(`task-${id}`, defaultName);
      }

      setTaskName(storedName || defaultName);
    }
  }, [taskName, id]);

  // Handle changes in task name input
  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // Save the edited task name to sessionStorage and stop editing
  const saveTaskName = () => {
    sessionStorage.setItem(`task-${id}`, taskName);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={taskName}
          onChange={handleNameChange}
          onBlur={saveTaskName} // Save the name when input loses focus
          onKeyPress={(e) => e.key === 'Enter' && saveTaskName()} // Save on Enter key
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{taskName}</span>
      )}
    </div>
  );
};

export default Task;
