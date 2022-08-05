import React, { useEffect, useState, forwardRef } from "react";
import Table from "../components/Table/Table";
import Button from "../components/Button/Button";

const TablePage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (tableData.length) {
    }
  }, [tableData]);

  const fetchData = async () => {
    try {
      const response = await fetch("./newTableData.json");
      const data = await response.json();
      // console.log(data[0]);
      if (data) {
        setTableData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const newColumns = [
    {
      dataKey: null,
      columnIndex: 0,
      columnName: "Checkbox",
      columnType: FakeCheckbox,
      columnTypeProps: { value: false, ref: null },
      columnChildren: <></>, //iterasyonda dataya gore degistir
    },
    {
      dataKey: "user_name",
      columnIndex: 0,
      columnName: "Kullanıcı adı",
      columnType: "div",
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "email",
      columnIndex: 1,
      columnName: "E-posta",
      columnType: "div",
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "role",
      columnIndex: 2,
      columnName: "Rolü",
      columnType: MockBadge,
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "create_date",
      columnIndex: 3,
      columnName: "Oluşturulma tarihi",
      columnType: "div",
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "update_date",
      columnIndex: 4,
      columnName: "Güncelleme tarihi",
      columnType: "div",
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "status",
      columnIndex: 5,
      columnName: "Durum",
      columnType: MockBadge,
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "first_name",
      columnIndex: 6,
      columnName: "Ad",
      columnType: "div",
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "last_name",
      columnIndex: 7,
      columnName: "Soyad",
      columnType: FakeInput,
      columnTypeAsString: "INPUT",
      columnTypeProps: {
        name: "Soyad",
        value: "",
        placeholder: "placeholder",
        disabled: false,
        style: { backgroundColor: "red" },
      },
      columnChildren: <></>, //iterasyonda degistir
    },
    {
      dataKey: "user_id",
      columnIndex: 8,
      columnName: "Kullanıcı kimliği",
      columnType: FakeLink,
      columnTypeProps: {}, //prop varsa ekle React.createElement()
      columnChildren: <></>, //iterasyonda degistir
    },
  ];
  return (
    <Table
      columns={newColumns}
      data={tableData.slice(0, 5)}
      // rowHoverChildren={
      //   <>
      //     <Button
      //       className={"btn tiny ui-success"}
      //       buttonText="adamgeldi"
      //       onClick={() => console.log("hi")}
      //     ></Button>
      //     <Button
      //       onClick={() => console.log("hi")}
      //       className={"btn tiny primary"}
      //       buttonText="ikinci"
      //     ></Button>
      //     <Button
      //       onClick={() => console.log("hi")}
      //       className={"btn tiny secondary"}
      //       buttonText="adamgeldi"
      //     ></Button>
      //   </>
      // }
    />
  );
};

export default TablePage;

const MockBadge = (props) => {
  const style = {
    backgroundColor: "limegreen",
    width: "100%",
    height: "50%",
    borderRadius: "5px",
  };
  const { children } = props;
  return <div style={style}>{children}</div>;
};
const FakeInput = (props) => {
  const { value, ...inputProps } = props;
  const [inputValue, setInputValue] = useState(value);
  const style = {
    backgroundColor: "limegreen",
    width: "100%",
    height: "100%",
    borderRadius: "5px",
  };
  return (
    <input
      value={inputValue}
      style={style}
      onChange={(e) => setInputValue(e.target.value)}
      {...inputProps}
    />
  );
};

const FakeCheckbox = forwardRef((props, ref) => {
  const { value, ...inputProps } = props;
  const [inputValue, setInputValue] = useState(value);
  const handleOnChange = () => {
    console.log(inputValue);
    setInputValue(!inputValue);
  };
  return (
    <div>
      <input
        type="checkbox"
        value={inputValue}
        onChange={() => handleOnChange()}
        {...inputProps}
        checked={inputValue}
        ref={(ele) => ref.current.push(ele)} //check yapinca ref sayisi artiyor,state degistigi icin olabilir
      />
    </div>
  );
});

const FakeLink = () => {
  return <a href="https://github.com/werlan200">github</a>;
};
