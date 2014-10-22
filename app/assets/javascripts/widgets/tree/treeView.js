Transcriptic.Tree.TreeView = function(treeContainerSelector) {
  this.$container = $(treeContainerSelector);
};

Transcriptic.Tree.TreeView.prototype = {
  bindEventListeners: function(controller) {
    this.$container.on("click", ".expander", this.handleParentNodeClick);
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
      $tree.sortable({items: "> li:not(:first)"});
    }
  },
  render: function(nodeData, $parent) {
    var $listElem = $("<li></li>");
    $parent.append($listElem);

    var $text = this.addTextToNode($listElem, nodeData.text);
    this.addDataToNode($text, nodeData.data);
    this.addSubtree($listElem, nodeData.nodes);
    this.addCallback($text, nodeData.callback);
    this.addClass($text, nodeData.cssClass);
    this.addIcon($listElem, nodeData.icon);
  },
  addExpander: function($node) {
    var $expander = this.addIcon($node, "fa fa-minus")
    $expander.addClass("expander");
  },
  addTextToNode: function($node, text) {
    var $nodeText = $("<span>" + text + "</span>");
    $node.append($nodeText);

    return $nodeText;
  },
  addDataToNode: function($node, dataList) {
    for(var data in dataList) {
      $node.data(data, dataList[data]);
    }
  },
  addSubtree: function($node, children) {
    if(children) {
      var $subTree = $("<ul></ul>");
      this.addExpander($node);
      // $node.addClass("collapsed");
      // $subTree.hide();
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
  addIcon: function($node, icon) {
    if(icon) {
      $node.find("i").remove();

      var $iconElem = $("<i></i>");
      $iconElem.addClass(icon);
      $node.prepend($iconElem);
      return $iconElem;
    }
  },
  handleParentNodeClick: function(evt) {
    evt.stopPropagation();
    var $expander = $(evt.currentTarget);
    var $listElem = $(evt.currentTarget.parentNode);
    var $subTree = $listElem.find("> ul").toggle();

    if($subTree.length > 0) {
      $expander.toggleClass("fa-plus");
      $expander.toggleClass("fa-minus");
    }
  },
  highlight: function($node) {
    $node.parents("ul:last-child").find("li > span").removeClass("highlight");
    $node.addClass("highlight")
  },
  getNodeWithData: function(key, data) {
    var $nodes = this.$container.find("li > span");
    return $nodes.filter(function() { return $.data(this, key) == data; });
  }
};