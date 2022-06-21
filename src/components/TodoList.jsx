import React from "react";
import styled from "styled-components";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

export default function TodoList() {
  return <TodoListBlock>Todolist</TodoListBlock>;
}
