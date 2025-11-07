console.log('Search bar initialized');
function filterResults(query, items) {
  return items.filter(item => item.includes(query));
}
