// const traverseDOM = node => {
//
//   // Iterative version: use a while loop!
//   // - the function starts by getting node.children,
//   // adding it to an array of nodes to visit,
//   // then looping over the array, printing out the details
//   // of each node as it *removes* the node from the array
//   let children = node.children;
//   let nodes = [...children];
//   while(nodes.length > 0) {
//     console.log(`Node name: ${nodes[0].nodeName}, Class name: ${nodes[0].className}`);
//     //nodes.push(nodes[0].children);
//     if (nodes[0].children) {
//       nodes.push(...nodes[0].children);
//       //console.log(nodes[0].children);
//     }
//     nodes.shift();
//   }
// };
//
// traverseDOM(document.body);


// D.A.G (directed acyclic graph)
const traverseDOM = node => {
  let nodesToVisit = [...node.chilren]; // Array.from(nodes.children)
  console.log(nodesToVisit, typeof nodesToVisit);

  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.shift();
    console.log(currentNode.nodename, currentNode.className);

    // Ad the children of currentNode to the end of the array we ware looping over
    nodesToVisit = [...nodesToVisit, ...currentNode.children];
  }
}; // traverseDOM()

traverseDOM(document.body);

const traverseDOMRecursive = node => {

  // Print the current node details (nodeName, className), and then
  // loop through all of node.children nodes, and
  // call the function recursively with each of the children
  for (let i = 0; i < node.children.length; i++) {
    console.log(`Node name: ${node.children[i].nodeName}, Class name: ${node.children[i].className}`);
    traverseDOMRecursive(node.children[i]);
  }

};

traverseDOMRecursive(document.body);
