function createCollection(name, description) {
  return { name, description, tracks: [] };
}

function createTrack(title = "unknown", artist = "unknown", duration = 0) {
  return { title, artist, duration };
}

function reviewTrack(track) {
  var awesomeBand = "Red Hot Chili Peppers";

  if (track.artist === awesomeBand) return `The song ${track.title} rules!`;
  return `I wish this was a ${awesomeBand} song.`;
}

function addTrack(collection, track) {
  var newCollection = JSON.parse(JSON.stringify(collection));
  newCollection.tracks.push(track);
  return newCollection;
}

function getTotalDuration(collection) {
  var totalDuration = 0;
  collection.tracks.forEach((track) => {
    totalDuration += track.duration;
  });
  return totalDuration;
}

function findTracksByArtist(collection, artist) {
  var matchTracks = [];
  collection.tracks.forEach((track) => {
    if (track.artist === artist) matchTracks.push(track);
  });

  return matchTracks;
}

module.exports = {
  createCollection,
  createTrack,
  reviewTrack,
  addTrack,
  getTotalDuration,
  findTracksByArtist,
};
