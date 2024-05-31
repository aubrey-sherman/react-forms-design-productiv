import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import Todo from "./Todo.jsx";

describe("Todo component", function () {
  test("contains expected description", function () {
    const sampleTodo = {
      title: "Sleep", description: "Sleep a lot", priority: 1
    };
    const result = render(<Todo todo={sampleTodo} />);
    expect(result.queryByText("Sleep a lot")).toBeInTheDocument();
  });
});