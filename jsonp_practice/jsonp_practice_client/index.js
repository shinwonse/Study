function myCallback(groupData) {
  const groupList = document.getElementById('group');
  groupData.map((data) => {
    const list = document.createElement('li');
    list.innerText = data.group;
    groupList.appendChild(list);
  });
}
