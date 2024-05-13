import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
type Props = {
  text: string;
  completed: boolean;
  onClick?: any;
};

const TodoCard = ({ text, completed, onClick }: Props) => {
  return (
    <Card
      className={cn(
        "w-[40%] dark:text-black",
        !completed ? "bg-red-200" : "bg-green-200"
      )}
    >
      <CardHeader>{text}</CardHeader>
      <CardFooter>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" checked={completed} onClick={onClick} />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {completed ? "Incomplete" : "Complete"}
          </label>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;
