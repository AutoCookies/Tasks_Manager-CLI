import { addTask, updateTask, deleteTask, markATask, showAll, showDoneTasks, showNotDoneTasks, showInProgressTask } from "./Utils/utils.js";
import readlineSync from 'readline-sync';

function main() {
    while (true) {
        console.log("\nTask Tracker CLI");
        console.log("1. Add Task");
        console.log("2. Delete Task");
        console.log("3. Update Task");
        console.log("4. Mark a Task")
        console.log("5. Show All Tasks");
        console.log("6. List all done task");
        console.log("7. Show not Done task");
        console.log("8. Show not in_progress task");
        console.log("0. Exit");

        let choice = readlineSync.question("Choose an option: ").trim();

        if (choice === "1") {
            addTask();
        } else if (choice === "2") {
            deleteTask();
        } else if (choice === "3") {
            updateTask();
        } else if (choice === "4") {
            markATask();
        } else if (choice === "5") {
            showAll();
        } else if (choice === "6") {
            showDoneTasks();
        } else if (choice === "7") {
            showNotDoneTasks();
        } else if (choice === "8") {
            showInProgressTask();
        } else if (choice === "0") {
            console.log("Program ended.");
            return;
        } else {
            console.log("Invalid choice. Please enter 1, 2, 3, or 0.");
        }
    }
}

main();