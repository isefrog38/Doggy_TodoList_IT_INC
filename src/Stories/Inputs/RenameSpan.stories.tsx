import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {RenameSpanFunction} from "../../Component/RenameSpanFunction";

export default {
    title: 'MyComponents/Inputs/RenameSpan',
    component: RenameSpanFunction,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        editTitle: {action: "Value Changed:"}
    }
} as ComponentMeta<typeof RenameSpanFunction>;

const Template: ComponentStory<typeof RenameSpanFunction> = (args) => {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <RenameSpanFunction {...args}/>
        </div>
    )
};

export const RenameSpanStories = Template.bind({});
RenameSpanStories.args = {
    title: "Click (twice)",
}