Transcriptic.Tree.TreeController = function(treeContainerSelector) {
  this.treeView = new Transcriptic.Tree.TreeView(treeContainerSelector);
  this.treeView.bindEventListeners(this);
};

Transcriptic.Tree.TreeController.prototype = {
  renderTree: function(treeData, sortable) {
    this.treeView.renderTree(treeData, sortable);
  },
  highlight: function($node) {
    this.treeView.highlight($node);
  },
  getNodeWithData: function(key, data) {
    return this.treeView.getNodeWithData(key, data);
  }
};