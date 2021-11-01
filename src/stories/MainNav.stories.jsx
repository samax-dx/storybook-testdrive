import React from 'react';

import { MainNav } from './MainNav';

export default {
    title: "sms-portal/MainNav",
    component: MainNav,
    argTypes: {
        color: { control: "color" },
        selectedKey: { control: "select" }
    }
};

const Template = props => <MainNav {...props} />;

export const DefaultSelection = Template.bind({});
DefaultSelection.args = {
    color: "#000"
};

export const SpecifiedSelection = Template.bind({});
SpecifiedSelection.args = {
    selectedKey: "product"
};
