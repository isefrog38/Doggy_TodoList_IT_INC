import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddPanel} from "../../Component/AddPanel/AddPanel";
import {v1} from "uuid";

export default {
    title: 'MyComponents/Inputs/AddPanel',
    component: AddPanel,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        addTask: {action: 'clicked'}
    },
    decorators: [
        story => <div style={{ padding: '3rem' }}>{story()}</div>
    ],
} as ComponentMeta<typeof AddPanel>;

const id = v1();

const Template: ComponentStory<typeof AddPanel> = (args) => <AddPanel {...args}/>;

export const Input = Template.bind({
    id: id,
});
