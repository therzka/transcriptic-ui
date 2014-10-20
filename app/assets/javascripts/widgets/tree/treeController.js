Transcriptic.Tree.TreeController = function(treeContainerSelector) {
  this.treeView = new Transcriptic.Tree.TreeView(treeContainerSelector);
  this.treeView.bindEventListeners(this);
};

Transcriptic.Tree.TreeController.prototype = {
  renderTree: function(treeData) {

  }
};