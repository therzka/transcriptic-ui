Transcriptic.Tree.TreeView = function(treeContainerSelector) {
  this.$container = $(treeContainerSelector);
};

Transcriptic.Tree.TreeView.prototype = {
  bindEventListeners: function(controller) {
    this.controller = controller;
  },
  renderTree: function(treeData) {
    this.$container.empty();
    var $tree = $("<ul></ul>")

    this.render(treeData, $tree)
    this.$container.append($tree);
  },
  render: function(nodeData, $parent) {
    var $listElem = $("<li>" + nodeData.text + "</li>");
    $parent.append($listElem);

    if(nodeData.nodes != null) {
      var $subTree = $("<ul></ul>");
      $listElem.append($subTree);

      for(var i in nodeData.nodes) {
        var node = nodeData.nodes[i];
        this.render(node, $subTree);      
      }
    }
  }
};