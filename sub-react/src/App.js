import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import logo from './logo.svg';
import './App.css';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="about">
        hello
      </div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {
      isModalVisible && <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      }
    </>
  );
}

export default App;
