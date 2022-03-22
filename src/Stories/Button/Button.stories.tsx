import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Buttons} from "../../Component/Button";

export default {
    title: "MyComponents/Button/Button",
    component: Buttons,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['tiny', 'small', 'medium', 'large'],
        },
        onClickHandler: {action: 'clicked'},
    },
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args}/>;

export const ButtonAll = Template.bind({});
ButtonAll.args = {
    title: "All",
    activeButton: "All",
};

export const ButtonActive = Template.bind({});
ButtonActive.args = {
    title: "Active",
    activeButton: "Active",
};

export const ButtonCompleted = Template.bind({});
ButtonCompleted.args = {
    title: "Completed",
    activeButton: "Completed",
};



