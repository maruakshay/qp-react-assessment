import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
type Props = {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const Alert = ({ setTodo }: Props) => {
  const [text, setText] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  function handleClick(e: any) {
    e.preventDefault();
    setTodo(text);
    setText("");
    setOpen(false);
  }
  return (
    <AlertDialog open={open} onOpenChange={() => setOpen(!open)}>
      <AlertDialogTrigger>
        <Button className="flex gap-2">
          Add list
          <Plus className="size-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Add list</AlertDialogTitle>
          <AlertDialogDescription>
            Please add a todo list and select the progress
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="p-5">
          <Textarea
            placeholder="write your todo here"
            value={text}
            onChange={(e: any) => setText(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClick}>Save</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Alert;
