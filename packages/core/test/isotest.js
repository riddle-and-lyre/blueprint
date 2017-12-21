/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the terms of the LICENSE file distributed with this project.
 */

const { generateIsomorphicTests } = require("@blueprintjs/test-commons");
const React = require("react");
// TODO: get this to work with require("@std/esm")(module)("../dist/esm")
const Core = require("../dist");

const tooltipContent = { content: React.createElement("h1", {}, "content") };
const customProps = {
    Hotkey: { combo: "mod+s", global: true, label: "save" },
    Icon: { iconName: "pt-icon-build" },
    KeyCombo: { combo: "?" },
    Overlay: { lazy: false, inline: true },
    SVGTooltip: tooltipContent,
    TagInput: { values: ["foo", "bar", "baz"] },
    Tooltip: tooltipContent,
};

const popoverTarget = React.createElement("button");
const customChildren = {
    Hotkeys: React.createElement(Core.Hotkey, customProps.Hotkey),
    Popover: popoverTarget,
    Popover2: popoverTarget,
    SVGPopover: popoverTarget,
    SVGTooltip: popoverTarget,
    Tabs: React.createElement(Core.Tab, { key: 1, id: 1, title: "Tab one" }),
    Tooltip: popoverTarget,
    Tooltip2: popoverTarget,
};

const skipList = [
    "Portal", // doesn't render any DOM inline
    "Tabs", // deprecated component, logs a warning
]

const classNameChildList = [
    "Alert",
    "Dialog",
    "MenuItem",
    "Popover2",
    "Portal",
    "Toaster",
    "Tooltip2"
]

describe("Core isomorphic rendering", () => {
    generateIsomorphicTests(Core, customProps, customChildren, skipList, classNameChildList);
});
