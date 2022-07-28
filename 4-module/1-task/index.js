function makeFriendsList(friends) {
  let ul = document.createElement('ul'); 

  friends.map(friend => friend.firstName + ' ' + friend.lastName).forEach(friend => {
    let li = document.createElement('li'); 
    li.innerHTML = friend;
    ul.append(li);
  })

  return ul;
}
