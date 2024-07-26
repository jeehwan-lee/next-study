import React from "react";

type Props = {
  name: string;
  age?: number;
};

function Welcome(props: Props) {
  return <h4>Hello, {props.name}</h4>;
}

function ItemList() {
  return (
    <div>
      <Welcome name="Alice" />
    </div>
  );
}

export default ItemList;
