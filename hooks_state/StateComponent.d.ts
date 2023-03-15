/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */

import React from "react";
import Store from "./Store";

interface StateComponentProps {
  store: Store;
  children: React.ReactNode[] | React.ReactNode;
}

declare class StateComponent extends React.PureComponent<StateComponentProps> {}

export default StateComponent;