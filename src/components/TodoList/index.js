import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from "uuid"
import { useRef, useState } from 'react';
import { reselectRemaining } from '../../redux/selectors';
import todoListSlice from './todoListSlice';

export default function TodoList() {
  const dispatch = useDispatch();

  const [todoName, setTodoName] = useState("");
  const [prioriry, setPrioriry] = useState("Medium");

  const handleAdd = () => {
    dispatch(todoListSlice.actions.addTodo({ id: uuidv4, name: todoName, completed: false, priority: prioriry }));
    setTodoName("")
    inputRef.current.focus();
  }
  const inputRef = useRef();
  const handleInputName = (e) => {
    setTodoName(e.target.value);
  }

  const handleChangeValue = (value) => {
    setPrioriry(value)
  }

  const todoList = useSelector(reselectRemaining)
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((data) => (
          <Todo key={data.id} name={data.name} prioriry={data.priority} />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputName} ref={inputRef} />
          <Select defaultValue="Medium" onChange={handleChangeValue}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
