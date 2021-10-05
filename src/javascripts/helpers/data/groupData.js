// TODO: Complete this file

import axios from 'axios';
import getUserGroups from './userGroupsData';

const dbUrl = 'https://complex-data-2a255-default-rtdb.firebaseio.com/';

const getGroups = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/groups.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// Get groups and count up all the users in each group
// RESOLVE the group info and the user counts
const mergeGroupData = () => new Promise((resolve, reject) => {
  Promise.all([getGroups(), getUserGroups()])
    .then(([groups, userGroupsJoin]) => {
      // COMPLETE THIS FUNCTION
      const allGroupInfoArray = groups.map((group) => {
        const groupRelationshipArray = userGroupsJoin.filter((ug) => ug.group_id === group.id);
        return { ...group, count: groupRelationshipArray.length };
      });
      console.warn(allGroupInfoArray);
      resolve(allGroupInfoArray);
    }).catch((error) => reject(error));
});

export { mergeGroupData, getGroups };
