// This component represents a form input that allows the user to select a region from a dropdown and load the selected region using Redux.

import React, { useState } from 'react';
import { Form, Select, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { loadRegion } from '../context/regionSlice';

const { Option } = Select;

const FormInput = () => {
  // Create a dispatch function from Redux to dispatch actions.
  const dispatch = useDispatch();
  // State variable to keep track of the selected region.
  const [region, setRegion] = useState(null);
  // Handler function to update the selected region when the dropdown value changes.
  const handleRegionChange = (value) => {
    setRegion(value);
  };
  // Handler function to trigger the Redux action to load the selected region.
  const handleLoadClick = () => {
    // Dispatch the "loadRegion" action with the selected region as payload.
    dispatch(loadRegion(region));
  };
  return (
    <Form>
      <Form.Item>
        <>
          {/* Heading to prompt the user to select a region */}
          <h4 style={{ color: 'white', paddingTop: '20px' }}>
            Select the region
          </h4>
          {/* Dropdown to select the region */}
          <Select onChange={handleRegionChange}>
            <Option value='us'>United States</Option>
            <Option value='in'>India</Option>
            <Option value='uk'>United Kingdom</Option>
          </Select>
        </>
      </Form.Item>
      <Form.Item>
        {/* Button to trigger the loading of the selected region */}
        <Button type='primary' onClick={handleLoadClick}>
          Load
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormInput;
