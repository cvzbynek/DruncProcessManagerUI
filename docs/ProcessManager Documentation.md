# ProcessManager Component Documentation

## Description

`ProcessManager` is a React component that provides an interface for managing and interacting with processes in a process management system. It uses the gRPC Web library to perform actions such as booting new processes, retrieving the state of existing processes, restarting processes, flushing processes, and killing processes.

## Imports

- The React library's hooks (`useState`, `useCallback`, `useMemo`, and `useEffect`) are imported.
- Several Bootstrap components are imported for the UI.
- `FontAwesomeIcon` from the `@fortawesome/react-fontawesome` library is used for icons.
- Various protocol buffers are imported from the generated files.
- Helper components like `HelpComponent`, `LogModal`, `BootModal`, `KillConfirmationModal`, and `RestartConfirmationModal` are imported.
- The `debounce` function from `lodash` is used to limit the rate at which a function can fire.

## State

The `ProcessManager` component maintains several state variables:

- `processInstances`: An array of all the process instances.
- `selectedUUIDs`: An array of UUIDs of the selected process instances.
- `filter`: An object containing filter options for the process list.
- `showModal`, `showLogModal`, `showKillConfirm`, and `showRestartConfirm`: Booleans to manage the visibility of various modals.
- `modalData`: An array of logs to display in the Log Modal.
- `configFile`: A file object for the boot configuration file.
- `user`, `session`, `processName`: Strings to store user, session, and process name.
- `selectAll`, `allChecked`: Booleans to manage the select all checkbox.
- `selectedNames`: An array to store the names of selected process instances.

## Functions

There are several functions within the component:

- `logError`: A function to handle errors.
- `timeout`: A utility function that returns a Promise that resolves after a given delay.
- `boot`: A function to boot a new process.
- `handleKill`, `handleRestart`: Functions to open the kill and restart confirmation modals.
- `confirmKill`, `confirmRestart`: Functions to perform the killing and restarting of selected processes.
- `handleFlush`: A function to flush the selected processes.
- `ps`: A function to update the `processInstances` state with the latest process state data from the server.
- `fetchLogs`: A function to fetch logs for a specific process.
- `handleActionClick`: A function to handle various action button clicks.
- `handleFilterChange`, `debouncedHandleFilterChange`: Functions to handle changes to the filter inputs.
- `handleCheckboxChange`: A function to handle changes to the checkboxes for selecting process instances.
- `handleModalClose`: A function to handle closing of the modals.
- `handleFileChange`: A function to handle file inputs for booting new processes.

## Memoization and Effects

There are several memoized variables in this component:

- `client`: An instance of the `ProcessManagerClient`.
- `token`: An instance of the `Token` message.
- `request`: An instance of the `Request` message.

`useEffect` hooks are used to call `ps` when the component mounts and to check if all checkboxes are checked whenever the `selectedUUIDs` or `processInstances` change.

## ProcessManager Component

### Overview

The `ProcessManager` component is responsible for managing multiple processes. It displays these processes in a tabular format and allows for actions like Boot, Restart, Kill, Flush, and Update to be performed on them.

### Components

#### LogModal

This is a modal component for viewing logs. It is triggered when the log button in the table row is clicked.

#### Multiple process actions

Buttons for executing actions on the processes:

- **Boot**: Boots up the process.
- **Restart**: Restarts the process.
- **Kill**: Kills the process.
- **Flush**: Flushes the process.
- **Update**: Updates the process.

#### KillConfirmationModal

This modal appears when the kill action is clicked. It asks for confirmation before killing the selected processes.

#### RestartConfirmationModal

This modal appears when the restart action is clicked. It asks for confirmation before restarting the selected processes.

#### BootModal

This modal appears when the boot action is clicked. It takes additional inputs required for booting up a process.

#### Table

The table lists all the managed processes with the following columns:

- Index
- UUID
- Name
- User
- Session
- Alive?
- Exit code
- Checkbox for selecting the process
- Logs button

Each row represents a single process instance.

The table also provides filter fields for each column to filter the list of displayed processes.

### Functions

- `handleActionClick`: Handles clicks on the action buttons. It takes the name of the action as a parameter.
- `debouncedHandleFilterChange`: Handles changes to the filter fields. It is debounced to prevent too many updates in a short time.
- `handleFilterChange`: Handles changes to the "Alive?" filter.
- `handleSelectAllChange`: Handles the change of the "select all" checkbox.
- `handleCheckboxChange`: Handles changes to the checkboxes on individual rows of the table.
- `fetchLogs`: Fetches logs for a specific process instance.

### Props

- `showModal`
- `handleModalClose`
- `handleActionClick`
- `handleFileChange`
- `user`
- `setUser`
- `session`
- `setSession`

These props are used for controlling the `BootModal`.

## User Interface

### Overview

The `ProcessManager` component offers a user-friendly interface for managing various processes. It displays key information about each process in a table format, provides process control actions, and supports filtering for easy navigation.

### UI Components

#### Action Buttons

Five primary action buttons are present in the top section:

1. **Boot Button**: Boots up the selected processes. It is represented with a green 'Play' icon.
2. **Restart Button**: Restarts the selected processes. It is represented with a yellow 'Sync' icon.
3. **Kill Button**: Kills the selected processes. It is represented with a red 'Stop' icon.
4. **Flush Button**: Flushes the selected processes. It is represented with a blue 'Eraser' icon.
5. **Update Button**: Updates the current state of processes. It is represented with a light-grey 'List' icon.

The **HelpComponent** button at the far right corner provides useful tips and guides for using the `ProcessManager`.

#### Process Table

The core of the `ProcessManager` is a table that displays all the managed processes. The table is striped and has a dark variant. It consists of the following columns:

1. **Index**: A numeric index of the processes as they appear on the current page.
2. **UUID**: Unique identifier of the process.
3. **Name**: Name of the process.
4. **User**: The user who owns the process.
5. **Session**: The session in which the process is running.
6. **Alive?**: Indicates whether the process is currently alive (Yes) or not (No).
7. **Exit Code**: The exit code of the process, if it has stopped.
8. **Checkbox**: A checkbox to select the process for batch actions.
9. **Logs**: A button to fetch and view the logs for the process. It is represented with a 'File' icon.

The table also provides filter fields for each column (excluding the checkbox and logs columns) to help users quickly find specific processes.

### Modals

There are three types of modals used in the `ProcessManager`:

1. **LogModal**: Triggered when the 'Logs' button in the table row is clicked. It displays the logs of the corresponding process.
2. **KillConfirmationModal**: Triggered when the 'Kill' action is clicked. It asks for confirmation before performing the kill action on the selected processes.
3. **RestartConfirmationModal**: Triggered when the 'Restart' action is clicked. It asks for confirmation before performing the restart action on the selected processes.
4. **BootModal**: Triggered when the 'Boot' action is clicked. It provides a form to input additional details required for booting up a process.

## Style

The `ProcessManager` uses Bootstrap for styling. Most components have a dark theme, but there are some exceptions: the 'Boot' button has a green background, the 'Restart' button has a yellow background, the 'Kill' button has a red background, the 'Flush' button has a blue background, and the 'Update' button has a light-grey background. The table is striped and has rounded corners with a 10px radius.

