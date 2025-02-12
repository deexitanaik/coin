import React from "react";
import PaymentForm from "./PaymentForm";

export default {
  title: "PaymentForm",
  component: PaymentForm,
};

const Template = (args) => <PaymentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
