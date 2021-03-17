import Node from "../../util/Node";

test("testing basic structure of node", () => {
  const node = new Node(1);
  expect(node).toEqual({ data: 1, next: null, previous: null });
});
