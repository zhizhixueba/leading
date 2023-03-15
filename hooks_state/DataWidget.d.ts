

/**
 * Author: Meng
 * Date: 2023-
 * Desc: 
 */
import React from "react";
import Datagram from "./Datagram";

interface DataWidgetProps {
  data: Datagram;
  child: React.ReactElement;
}

declare class DataWidgetBase extends React.Component<DataWidgetProps>{}

declare const DataWidget: React.ReactElement<DataWidgetProps> & typeof DataWidgetBase;

export default DataWidget;