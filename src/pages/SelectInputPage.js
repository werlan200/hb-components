import React, { useState, useEffect } from "react";
import SelectInput from "../components/SelectInput/SelectInput";
import { ReactComponent as DownArrow } from "../assets/downarrow.svg";
import { ReactComponent as UpArrow } from "../assets/uparrow.svg";
import { flattenData } from "../utils/functions";

const SelectInputPage = () => {
  const [treeData, setTreeData] = useState([]);
  const [selectValue, setSelectValue] = useState({}); //id holder

  useEffect(() => {
    fetchTreeData();
  }, []);
  const fetchTreeData = async () => {
    try {
      const response = await fetch("/CategoryTree.json");
      const data = await response.json();
      setTreeData(flattenData(data).slice(0, 100));
    } catch (error) {}
  };
  const handleOnChangeFromOutside = (selectedItem) => {
    console.log("disardan", selectedItem);
  };
  return (
    <>
      <SelectInput
        // size="small"
        data={treeData}
        setSelectValue={setSelectValue}
        placeholder="Placeholder"
        dropdownIsHiddenIcon={<DownArrow />}
        dropdownIsVisibleIcon={<UpArrow />}
        errorMessage=""
        onChange={handleOnChangeFromOutside}
        // disabled
      ></SelectInput>
      <SelectInput
        size="small"
        data={treeData}
        setSelectValue={setSelectValue}
        placeholder="Placeholder"
        dropdownIsHiddenIcon={<DownArrow />}
        dropdownIsVisibleIcon={<UpArrow />}
        errorMessage=""
        onChange={handleOnChangeFromOutside}
        disabled
      ></SelectInput>
      <SelectInput
        size="small"
        data={treeData}
        setSelectValue={setSelectValue}
        placeholder="Placeholder"
        dropdownIsHiddenIcon={<DownArrow />}
        dropdownIsVisibleIcon={<UpArrow />}
        errorMessage="asd"
        onChange={handleOnChangeFromOutside}
        // disabled
      ></SelectInput>
    </>
  );
};

export default SelectInputPage;
