import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput/TextInput";
import { ReactComponent as DownArrow } from "../assets/downarrow.svg";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { ReactComponent as TurkeyFlag } from "../assets/turkeyFlag.svg";

const TextInputPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [gsmCodes, setGsmCodes] = useState([]);

  //yeni

  useEffect(() => {
    fetchGsmCodes();
  }, []);

  const fetchGsmCodes = async () => {
    try {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries/codes"
      );
      const data = await response.json();
      // console.log(data.data);
      if (!data.error) {
        setGsmCodes(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  //yeni
  const setIsError = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    if (inputName === "GSM") {
      return /[a-zA-Z]/.test(inputValue); //harf varsa
    } else if (inputName === "password") {
      return !/^[A-Za-z0-9]*$/.test(inputValue); //harf ve numara olucak
    }
  };

  const handleOnChange = (e) => {
    let isError = setIsError(e);
    if (isError) {
      setErrorMessage("There is error...");
    } else {
      setErrorMessage("");
    }
    setSearchValue(e.target.value);
  };

  // const handleGsmCodeIcon = () => {
  //   if (gsmCodes.length) {
  //     const found = gsmCodes.find(
  //       (gsmCode) => gsmCode.code === selectedGsmCode
  //     );
  //     if (found.code === "TR") {
  //       return <TurkeyFlag />;
  //     } else {
  //       return found.code;
  //     }
  //   }
  // };
  const createGsmCodeIcons = () => {
    if (gsmCodes.length) {
      return gsmCodes.map((gsmCode) => {
        return gsmCode.code === "TR"
          ? { [gsmCode.code]: <TurkeyFlag /> }
          : { [gsmCode.code]: gsmCode.code };
      });
    }
  };
  return (
    <div className="textInputPageWrapper">
      <ul>
        Default
        <li>
          <TextInput
            name="GSM"
            value={searchValue}
            onChange={handleOnChange}
            errorMessage={errorMessage}
            leftIcon={<DownArrow />}
            gsmCodeIcons={createGsmCodeIcons()}
            gsmCodes={gsmCodes}
            type="text"
          />
        </li>
        <li>
          <TextInput
            name="text"
            value={searchValue}
            onChange={handleOnChange}
            errorMessage={errorMessage}
            rightIcon={<Cross />}
            gsmCodes={gsmCodes}
            type="text"
            isClearSearchValueOnClick={true}
            setClearSearchValue={() => setSearchValue("")}
          />
        </li>
        <li>
          <TextInput
            name="GSM"
            value={searchValue}
            onChange={handleOnChange}
            errorMessage={errorMessage}
            leftIcon={<DownArrow />}
            rightIcon={<Cross />}
            gsmCodes={gsmCodes}
            type="text"
            disabled
          />
        </li>
      </ul>
      <ul>
        Small
        <li>
          <TextInput
            name="password"
            value={searchValue}
            onChange={handleOnChange}
            errorMessage={errorMessage}
            rightIcon={<Cross />}
            size={"small"}
            type="password"
            isTogglePasswordVisibility={true}
          />
        </li>
      </ul>
    </div>
  );
};

export default TextInputPage;
