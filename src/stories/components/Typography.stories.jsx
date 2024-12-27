import React from "react";
import Typography from "@/components/Typography";

const meta = {
  title: "components/Typography",
  component: Typography,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: [
        "title01",
        "title02",
        "title03",
        "subtitle01",
        "subtitle02",
        "body01",
        "body02",
        "body03",
        "body04",
        "body05",
        "body06",
        "body06_underline",
        "caption01",
        "caption02",
      ],
    },
  },
  tags: ["autodocs"],
};

export default meta;
const Template = (args) => <Typography {...args} />;

// 모든 variant에 대한 스토리 정의
export const Title01 = Template.bind({});
Title01.args = {
  variant: "title01",
  children: "title01",
};

export const Title02 = Template.bind({});
Title02.args = {
  variant: "title02",
  children: "title02",
};

export const Title03 = Template.bind({});
Title03.args = {
  variant: "title03",
  children: "title03",
};

export const Subtitle01 = Template.bind({});
Subtitle01.args = {
  variant: "subtitle01",
  children: "subtitle01",
};

export const Subtitle02 = Template.bind({});
Subtitle02.args = {
  variant: "subtitle02",
  children: "subtitle02",
};

export const Body01 = Template.bind({});
Body01.args = {
  variant: "body01",
  children: "body01",
};

export const Body02 = Template.bind({});
Body02.args = {
  variant: "body02",
  children: "body02",
};

export const Body03 = Template.bind({});
Body03.args = {
  variant: "body03",
  children: "body03",
};

export const Body04 = Template.bind({});
Body04.args = {
  variant: "body04",
  children: "body04",
};

export const Body05 = Template.bind({});
Body05.args = {
  variant: "body05",
  children: "body05",
};

export const Body06 = Template.bind({});
Body06.args = {
  variant: "body06",
  children: "body06",
};

export const Body06Underline = Template.bind({});
Body06Underline.args = {
  variant: "body06_underline",
  children: "body06_underline",
};

export const Caption01 = Template.bind({});
Caption01.args = {
  variant: "caption01",
  children: "caption01",
};

export const Caption02 = Template.bind({});
Caption02.args = {
  variant: "caption02",
  children: "caption02",
};
