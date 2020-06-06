
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: task => {
      console.log(`${task1.title} has${task1.complete ? " " : " not "}been completed`);
  },
                                                                                                                markCompleted: task => {
    this.completeo = true;
     }
  };
  return task;
}




const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box"); // task 0
const taks2 = newTask("Do Laundry", '😨'); // task 1
const tasks = [task1, taks2];

task1.logState();
task1.markCompleted()
task1.logState();
//console.log(tasks);

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed
