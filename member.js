function skillMembers() {
  return {
    restrict: 'E',
    scope: {
      members: '=',
      skill: '='
    },
    templateUrl: 'app/components/skill/members.html',
    controller: skillMembersController,
    controllerAs: 'vm',
    bindToController: true
  };
}