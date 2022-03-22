import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {CleanButton} from "../../Component/Buttons/Button";

export default {
    title: "MyComponents/Button/Button",
    component: CleanButton,
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
    decorators: [
        story => <div style={{ padding: '3rem' }}>{story()}</div>
    ],
} as ComponentMeta<typeof CleanButton>;

const Template: ComponentStory<typeof CleanButton> = (args) => <CleanButton {...args}/>;

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



