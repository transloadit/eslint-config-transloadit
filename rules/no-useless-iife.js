"use strict";

module.exports = {
  create(context) {
    return {
      "ExpressionStatement CallExpression>ArrowFunctionExpression[body.body.length<2]":
        (node) => {
          if (node.parent.callee === node) {
            if (node.body.body.length === 0) {
              context.report({
                node,
                message: "Remove the empty IIFE",
              });
            } else if (node.body.body[0].type === "ExpressionStatement") {
              context.report({
                node,
                message:
                  "Do not use IIFE for just one instruction, call the instruction directly",
              });
            }
          }
        },
    };
  },
};
