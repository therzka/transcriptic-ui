Transcriptic.ProfileList = {};
Transcriptic.ProfileList.ProfileListWidget = function(profileListContainerSelector) {
  var profileList = new Transcriptic.Tree.TreeWidget(profileListContainerSelector);
  return new Transcriptic.ProfileList.ProfileListController(profileList);
}