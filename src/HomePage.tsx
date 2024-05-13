import { useEffect, useState } from "react";
import Alert from "./ui/Alert";
import TodoCard from "./ui/TodoCard";
import { ModeToggle } from "./components/mode-title";

const HomePage = () => {
  const [todoText, setTodoText] = useState<string>("");

  const [todos, setTodos] = useState([]);

  const toggleComplete = (id: number) => {
    setTodos((prev: any): any =>
      [...prev]?.map((todo: any) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    if (todoText.length > 1) {
      setTodos((prev: any): any => {
        return [
          ...prev,
          { id: prev.length + 1, text: todoText, completed: false },
        ];
      });
    }
  }, [todoText]);

  return (
    <>
      <header className="flex justify-between items-center p-5">
        <div className="w-max text-3xl font-bold">
          Question <span className="text-red-500">Pro</span>
        </div>
        <ModeToggle />
      </header>
      <main className="container grid gap-5 ">
        <Alert setTodo={setTodoText} />
        {/* list of 2 grid with one incomplete and then complete  ,  */}
        <div className="grid grid-cols-2 gap-5">
          <div className=" border border-black dark:border-white p-5 flex gap-5 flex-wrap rounded-md">
            <h2 className="basis-[100%] text-3xl font-bold">
              Incomplete <span className="text-red-400">Task</span>
            </h2>
            {todos
              ?.filter((val: any) => val.completed === false)
              ?.map((val: any) => (
                <TodoCard
                  key={val.id}
                  text={val.text}
                  completed={val.completed}
                  onClick={() => toggleComplete(val.id)}
                />
              ))}
          </div>
          <div className="border border-black dark:border-white p-5 flex gap-5 flex-wrap rounded-md">
            <h2 className="basis-[100%] text-3xl font-bold">
              Complete <span className="text-green-400">Task</span>
            </h2>
            {todos
              ?.filter((val: any) => val.completed === true)
              ?.map((val: any, index: number) => (
                <TodoCard
                  key={index}
                  text={val.text}
                  completed={val.completed}
                  onClick={() => toggleComplete(val.id)}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
