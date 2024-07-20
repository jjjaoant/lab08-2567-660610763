import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";

export default function Home() {
  const task = [
    {id: 1, title: "Read a book", isDone:true},
    {id: 2, title: "Take a shower", isDone:false},
    {id: 3, title: "Sleep", isDone:false}
  ]
  
  return (
    // Main container
    <div className="container mx-auto">
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input*/}
        <TaskInput />
        {/* task detail */}
          <Task {...task[0]} />
          <Task {...task[1]} />
          <Task {...task[2]} />
      </div>

      <Footer year="2024" fullname="Thanchanok Naensin" studentId="660610763"/>
      
    </div>
  );
}