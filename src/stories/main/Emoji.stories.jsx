import React from "react";
import { Meta, Story } from "@storybook/react";
import Emoji from "@/app/panel/Emoji";

/** @type {Meta} */
const meta = {
  title: "main/Emoji",
  component: Emoji,
  tags: ["autodocs"],
};

export default meta;

/** @type {Story} */
export const Primary = {
  args: {
    emoji: "happy",
  },
};
