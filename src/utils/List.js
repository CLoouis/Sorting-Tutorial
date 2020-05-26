import { PRIMARY_POSITION } from './Constants'
import State from './State'
import Element from './Element'
import SecondElement from './SecondElement'

const append = (element, secondElement, newNumber) => {
  element.push(new Element(newNumber, element.length, PRIMARY_POSITION));
  secondElement.push(new SecondElement(newNumber, secondElement.length, PRIMARY_POSITION));
}

const appendList = (element, secondElement, numArray) => {
  for (var i = 0; i < numArray.length; i++) {
    append(element, secondElement, numArray[i]);
  }
};

const update = (element, secondElement) => {
  for (var i = 0; i < secondElement.length; i++) {
    element[secondElement[i].elementPosition].position = i;
    element[secondElement[i].elementPosition].secondPosition = secondElement[i].secondPosition;
  }
}

const copyElement = (oldElement) => {
  return new Element(oldElement.value, oldElement.position, oldElement.secondPosition);
}

const copySecondElement = (oldSecondElement) => {
  return new SecondElement(oldSecondElement.value, oldSecondElement.elementPosition, oldSecondElement
    .secondPosition);
}

export const createNewState = (numArray) => {
  var element = [];
  var secondElement = [];
  appendList(element, secondElement, numArray);
  return new State(element, secondElement);
}

export const copyState = (oldState) => {
  var newElement = [];
  var newsecondElement = [];
  for (var i = 0; i < oldState.secondElement.length; i++) {
    newElement.push(copyElement(oldState.element[i]));
    newsecondElement.push(copySecondElement(oldState.secondElement[i]));
  }

  return new State(newElement, newsecondElement);
}

export const updateCopyPush = (list, stateToPush) => {
  update(stateToPush.element, stateToPush.secondElement);
  list.push(copyState(stateToPush));
}
