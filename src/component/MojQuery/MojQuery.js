const MojQuery = {
  addClass: (dom,addClass) => {
    let temp = dom.className.split(' ');
    temp.push(addClass);
    dom.className = temp.join(' ');
  },
  
  removeClass: (dom,removeClass) => {
    let temp = dom.className.split(' ');
    temp.splice(temp.indexOf(removeClass),1);
    dom.className = temp.join(' ');
  },

  appendChild: (parentNode,childNode) => {
    parentNode.appendChild(childNode);
  },
  
  getPosition: (element) => {
    let top = element.getBoundingClientRect().top + window.scrollY;
    let left = element.getBoundingClientRect().left + window.scrollX;
    return {
      top: top,
      left: left,
    }
  },
}

export default MojQuery;