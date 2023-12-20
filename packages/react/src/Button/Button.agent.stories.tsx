import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button.agent";

const MODIFIERS = [
  "success",
  "info",
  "danger",
  "reverse",
  "disabled",
  "small",
  "hasiconLeft",
  "hasiconRight",
];

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  argTypes: { onClick: { action: "clicked" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof Button>,
  "classModifier" | "children"
> & {
  children: string;
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Button",
  render: ({ children: text, classModifier, onClick, ...args }) => (
    <Button classModifier={classModifier.join(" ")} onClick={onClick} {...args}>
      {text}
    </Button>
  ),
  args: {
    children: "Button",
    classModifier: [] as string[],
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "multi-select" },
    },
  },
};

export const MultiExamples: StoryObj<typeof Button> = {
  name: "Button with modifiers",
  render: () => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "2rem",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        <Button classModifier="reverse">Button Reverse</Button>
        <Button classModifier="success">Button Success</Button>
        <Button classModifier="danger">Button Danger</Button>
        <Button classModifier="small">Button Small</Button>
        <Button classModifier="disabled">Button disabled</Button>
      </div>
    );
  },
};

export const Reverse: StoryObj<typeof Button> = {
  name: "Button reverse",
  args: {
    children: "Button Reverse",
    classModifier: "reverse",
  },
};

export const Success: StoryObj<typeof Button> = {
  name: "Button success",
  args: {
    children: "Button success",
    classModifier: "success",
  },
};

export const Danger: StoryObj<typeof Button> = {
  name: "Button danger",
  args: {
    children: "Button Danger",
    classModifier: "danger",
  },
};

export const WithIconRight: StoryObj<typeof Button> = {
  name: "Button with right icon",
  args: {
    children: (
      <>
        <span className="glyphicon glyphicon-arrow-right"></span>
        <span className="af-btn__text">With icon</span>
      </>
    ),
    classModifier: "hasiconRight",
  },
};

export const WithIconLeft: StoryObj<typeof Button> = {
  name: "Button with left icon",
  args: {
    children: (
      <>
        <span className="glyphicon glyphicon-arrow-left"></span>
        <span className="af-btn__text">With icon</span>
      </>
    ),
    classModifier: "hasiconLeft",
  },
};

export const Small: StoryObj<typeof Button> = {
  name: "Button small",
  args: {
    children: "Button Small",
    classModifier: "small",
  },
};

export const Circle: StoryObj<typeof Button> = {
  name: "Button circle",
  args: {
    classModifier: "circle",
    title: "Save",
    children: <span className="glyphicon glyphicon-floppy-disk"></span>,
  },
};
