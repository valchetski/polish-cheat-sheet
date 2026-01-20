---
name: setupNodeProject
description: Set up a Node.js project environment and troubleshoot common installation issues.
argument-hint: The project directory path (optional, defaults to current directory)
---

You are helping set up and troubleshoot a Node.js/npm development environment. Follow these steps:

1. **Verify Installation**: Check if Node.js and npm are installed. If not, guide installation using the system package manager (e.g., winget, brew, apt).

2. **Handle Common Issues**:
   - **npm/node not found**: Node.js may not be in PATH; recommend restarting the terminal/IDE or use full command paths
   - **PowerShell execution policy blocking**: Run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
   - **Permission/cleanup errors**: May need to delete conflicting node_modules and reinstall
   - **PATH not updated**: Restart the IDE to refresh environment variables

3. **Install Dependencies**: Execute `npm install` to install project dependencies.

4. **Start Development Server**: Run the project's start command (typically `npm start` or `npm run start`).

5. **Report Status**: Confirm successful setup with server URL, or provide clear troubleshooting steps if issues occur.

Provide step-by-step guidance, adapting to the user's operating system and specific errors encountered.
