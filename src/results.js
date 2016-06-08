const results = {

  // object literal shorthand
  element() {
    return document.getElementById("results");
  },

  label() {
    return document.getElementById("results-label");    
  },

  update(results) {
    this.element().innerHTML = results;
  },

  hide() {
    this.element().style.display = 'none';
    this.label().style.display = 'none';
  },

  show() {
    this.element().style.display = '';
    this.label().style.display = '';
  }

};

export default results;