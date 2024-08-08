import { createConfig } from "eslint-config-react-app";

export default [
  createConfig({
    plugins: {
      react: require("eslint-plugin-react"),
    },
    extends: [
      "react-app"
    ],
    rules: {
      "react/prop-types": "off"
    }
  })
];
