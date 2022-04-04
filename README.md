# Getting Started with Create React App

To setup locally
```
yarn install
yarn start
```

To run build locally
```
yarn build
serve -s build
```


## Dependencies
```
{
    "axios": "^0.26.1",
    "lodash": "^4.17.21",
    "nanoid": "^3.3.2",
    "node-sass": "^7.0.1",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-fluid-table": "^0.4.2",
    "react-scripts": "5.0.0"
 }
```

## Feature
1. Double click on the tab to edit the heading of the tab and press enter to save the tab heading. 
2. Click on header name of column, to sort the table [ asc, desc, normal ]
3. used [react-fluid-table](https://github.com/mckervinc/react-fluid-table) to build the skeleton of the table which is powered by [react-window](https://github.com/bvaughn/react-window) 

### `react-window`
React window works by only rendering part of a large data set (just enough to fill the viewport). This helps address some common performance bottlenecks:

It reduces the amount of work (and time) required to render the initial view and to process updates.
It reduces the memory footprint by avoiding over-allocation of DOM nodes.




