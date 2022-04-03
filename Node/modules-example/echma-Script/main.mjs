//This is called the echma script or es6 import statement
// requiring a module from another file

import { printHelloWorld } from "./export.mjs";

function callPrintHelloWorld(){
    printHelloWorld();
}

callPrintHelloWorld();