Transcriptic.Tree.TreeView = function(treeContainerSelector) {
  this.$container = $(treeContainerSelector);
};

Transcriptic.Tree.TreeView.prototype = {
  bindEventListeners: function(controller) {
    this.$container.on("click", "li", this.handleParentNodeClick);
    this.controller = controller;
  },
  renderTree: function(treeData, sortable) {
    this.$container.empty();
    var $tree = $("<ul class='tree'></ul>");

    for(var i in treeData) {
      this.render(treeData[i], $tree);
    }
    
    this.$container.append($tree);

    if(sortable) {
      $tree.sortable();
    }
  },
  render: function(nodeData, $parent) {
    var $listElem = $("<li>" + nodeData.text + "</li>");
    $parent.append($listElem);

    this.addDataToNode($listElem, nodeData.data);
    this.addSubtree($listElem, nodeData.nodes);
    this.addCallback($listElem, nodeData.callback);
    this.addClass($listElem, nodeData.cssClass);
  },
  addDataToNode: function($node, dataList) {
    for(var data in dataList) {
      $node.data(data, dataList[data]);
    }
  },
  addSubtree: function($node, children) {
    if(children) {
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
  addCallback: function($node, callback) {
    if(callback) {
      $node.on("click", callback);
    }
  },
  addClass: function($node, cssClass) {
    $node.addClass(cssClass);
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