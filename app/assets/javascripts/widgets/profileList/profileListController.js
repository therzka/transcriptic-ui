Transcriptic.ProfileList.ProfileListController = function(profileList) {
  this.profileList = profileList;
  this.refreshList();
};

Transcriptic.ProfileList.ProfileListController.prototype = {
  refreshList: function() {
    var listData = Transcriptic.ProfileList.ProfileParser.parse([Transcriptic.organization], this);
    this.profileList.renderTree(listData);
  }
};