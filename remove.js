import fs from "fs";
import glob from "glob";

// Use the glob variable somewhere in your code
console.log(glob);

// Function to remove unused files
// Function to remove unused files
function removeUnusedFiles(usedFiles, directory) {
  // Get all files and directories in the directory
  const allEntries = fs.readdirSync(directory, { withFileTypes: true });

  // Remove unused files and directories
  allEntries.forEach((entry) => {
    const fullPath = `${directory}/${entry.name}`;
    if (!usedFiles.includes(entry.name)) {
      if (entry.isDirectory()) {
        fs.rmdirSync(fullPath, { recursive: true });
        console.log(`Removed unused directory: ${entry.name}`);
      } else {
        fs.unlinkSync(fullPath);
        console.log(`Removed unused file: ${entry.name}`);
      }
    }
  });
}

// Function to find used files
function findUsedFiles() {
  // Implement logic to find used files (e.g., parse source code, analyze dependencies)
  // Return an array of used files
  return ["file1.js", "file2.js", "file3.css", "image.jpg"];
}

// Main function
function main() {
  const directory = "src"; // Directory to search for files
  const usedFiles = findUsedFiles(); // Find used files
  removeUnusedFiles(usedFiles, directory); // Remove unused files
}

// Run the main function
main();
