import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import { ListGroup, ListGroupItem } from "reactstrap";
const Todos = ({ todos, markComplete }) => {
  return (
    <ListGroup className="mt-5 mb-2 items">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right" onClick={() => markComplete(todo.id)}>
            <FaCheckDouble />
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
