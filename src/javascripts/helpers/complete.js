// TODO: Complete this file

import { getGroups } from './data/groupData';
import getUsers from './data/userData';
import getUserGroups from './data/userGroupsData';

const groupsWithUsers = () => new Promise((resolve, reject) => {
  // COMPLETE THIS FUNCTION
  Promise.all([getUsers(), getGroups(), getUserGroups()])
    .then(([users, groups, userGroupsJoin]) => {
      const allGroupInfoArray = [];

      groups.forEach((group) => {
        const groupRelationshipArray = [];
        const userInfoArray = [];
        // push all the relationships that apply to this group
        // use the spread to not have an array of arrays
        // instead an array of objects.
        groupRelationshipArray.push(...userGroupsJoin.filter((ug) => ug.group_id === group.id));

        groupRelationshipArray.forEach((groupRelationship) => {
          userInfoArray.push(users.find((user) => user.id === groupRelationship.user_id));
        });
        allGroupInfoArray.push({ ...group, users: userInfoArray });
      });
      console.warn(allGroupInfoArray);
      resolve(allGroupInfoArray);
    }).catch((error) => reject(error));
});

export default groupsWithUsers;
