pragma solidity ^0.5.0;

contract MyStringStore {
  string public myString = "Hello World"; // getter auto generated

  function set(string memory _x) public {
    myString = _x;
  }
}
