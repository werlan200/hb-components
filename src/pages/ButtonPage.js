import React from "react";
import Button from "../components/Button/Button";
import { ReactComponent as AddCircle } from "../assets/addcircle.svg";
import { ReactComponent as DownArrow } from "../assets/downarrow.svg";

const ButtonPage = () => {
  const sayHello = () => {
    console.log("mrb");
  };
  return (
    <div className="btnPage">
      <ul>
        <li>
          <Button
            className={"btn large ui-success"}
            buttonText="ui-success"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default ui-success"}
            buttonText="ui-success"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small ui-success"}
            buttonText="ui-success"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny ui-success"}
            buttonText="ui-success"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large ui-danger"}
            buttonText="ui-danger"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default ui-danger"}
            buttonText="ui-danger"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small ui-danger"}
            buttonText="ui-danger"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny ui-danger"}
            buttonText="ui-danger"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large link-ghost"}
            buttonText="link-ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default link-ghost"}
            buttonText="link-ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small link-ghost"}
            buttonText="link-ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny link-ghost"}
            buttonText="link-ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large primary"}
            buttonText="primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default primary"}
            buttonText="primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small primary"}
            buttonText="primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny primary"}
            buttonText="primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large secondary"}
            buttonText="secondary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default secondary"}
            buttonText="secondary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small secondary"}
            buttonText="secondary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny secondary"}
            buttonText="secondary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large tertiary"}
            buttonText="tertiary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default tertiary"}
            buttonText="tertiary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small tertiary"}
            buttonText="tertiary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny tertiary"}
            buttonText="tertiary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large ghost"}
            buttonText="ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default ghost"}
            buttonText="ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small ghost"}
            buttonText="ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny ghost"}
            buttonText="ghost"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
      <ul>
        <li>
          <Button
            className={"btn large link-primary"}
            buttonText="link-primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
          />
        </li>
        <li>
          <Button
            className={"btn default link-primary"}
            buttonText="link-primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn small link-primary"}
            buttonText="link-primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
        <li>
          <Button
            className={"btn tiny link-primary"}
            buttonText="link-primary"
            leftIcon={<DownArrow />}
            rightIcon={<AddCircle />}
            type="button"
            onClick={sayHello}
            disabled
          />
        </li>
      </ul>
    </div>
  );
};

export default ButtonPage;
