import { addDecorator } from '@storybook/react';
import routerDecorator from "./router-decorator";

addDecorator(routerDecorator);

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" }
};