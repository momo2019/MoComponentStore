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
}

export default MojQuery;