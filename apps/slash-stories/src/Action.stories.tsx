import { Action } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof Action> = {
  title: "Components/Action",
  component: Action,
  args: {
    onClick: fn(),
  },
};
export default meta;

export const Default: StoryObj<typeof Action> = {
  name: "Action Link",
  render: ({ ...args }) => <Action {...args} />,
  args: {
    href: "http://www.axa.fr",
    icon: "link",
    title: "Lien de test",
    target: "_blank",
    id: "id",
  },
};

export const Button: StoryObj<typeof Action> = {
  name: "Action Button",
  render: ({ onClick, ...args }) => <Action onClick={onClick} {...args} />,
  args: {
    icon: "floppy-disk",
    title: "Enregistrer",
    id: "id",
  },
};
