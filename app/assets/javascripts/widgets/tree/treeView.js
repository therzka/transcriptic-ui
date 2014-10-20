Transcriptic.Tree.TreeView = function(treeContainerSelector) {
  this.$container = $(treeContainerSelector);
};

Transcriptic.Tree.TreeView.prototype = {
  bindEventListeners: function(controller) {
    this.$container.on("click", "li", this.handleParentNodeClick);
    this.controller = controller;
  },
  renderTree: function(treeData) {
    this.$container.empty();
    var $tree = $("<ul class='tree'></ul>");

    this.render(treeData, $tree);
    this.$container.append($tree);
  },
  render: function(nodeData, $parent) {
    var $listElem = $("<li>" + nodeData.text + "</li>");
    $parent.append($listElem);

    this.addDataToNode($listElem, nodeData.data);
    this.addSubtree($listElem, nodeData.nodes);
  },
  addDataToNode: function($node, dataList) {
    for(var data in dataList) {
      $node.data(data, dataList[data]);
    }
  },
  addSubtree: function($node, children) {
    if(children != null) {
      var $subTree = $("<ul></ul>");
      $node.addClass("collapsed");
      $subTree.hide();
      $node.append($subTree);

      for(var i in children) {
        var node = children[i];
        this.render(node, $subTree);      
      }
    }
  },
  handleParentNodeClick: function(evt) {
    evt.stopPropagation();
    var $listElem = $(evt.currentTarget);
    var $subTree = $listElem.find("> ul").toggle();

    if($subTree.length > 0) {
      $listElem.toggleClass("collapsed");
      $listElem.toggleClass("expanded");
    }
  }
};