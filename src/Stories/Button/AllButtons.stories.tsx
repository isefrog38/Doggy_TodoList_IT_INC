import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AllButtonExample} from "./AllButton.example";

export default {
    title: "MyComponents/Button/TripleButtons",
    component: AllButtonExample,
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
} as ComponentMeta<typeof AllButtonExample>;

const Template: ComponentStory<typeof AllButtonExample> = (args) => <AllButtonExample {...args}/>;

export const ButtonAll = Template.bind({});
ButtonAll.args = {

};