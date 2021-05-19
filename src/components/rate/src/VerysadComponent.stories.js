/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Verysad from "./VerysadComponent";

export const myProps = {
  id: "1",
  className: "mySampleClass",
  sampleString: "Test Task",
  sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onActionOne: action("onActionOne"),
  onActionTwo: action("onActionTwo")
};

storiesOf("Verysad", module)
  .add("default", () => <Verysad {...myProps} {...actions} />)
  .add("pinned", () => <Verysad {...myProps} pinned={true} {...actions} />)
  .add("archived", () => <Verysad {...myProps} archived={true} {...actions} />);
