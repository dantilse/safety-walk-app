const state = {
  appStatus: 'scanStarted',
  scanCount: 2,
  scan: {
    tag: [
      {
        tagNumber: 24002,
        tagType: 'interior'
      },
      {
        tagLocation: {
          coords: {
            speed: -1,
            longitude: -122.406417,
            latitude: 37.785834,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
          },
          timestamp: 1547693735626.584
        }
      },
      {
        tagNumber: 22765,
        tagType: 'exterior'
      },
      {
        tagLocation: {
          coords: {
            speed: -1,
            longitude: -122.406417,
            latitude: 37.785834,
            accuracy: 5,
            heading: -1,
            altitude: 0,
            altitudeAccuracy: -1
          },
          timestamp: 1547693735626.584
        }
      }
    ]
  }
};

const newState = {
  appStatus: 'scanStarted',
  scanCount: 2,
  location: {
    speed: -1, // 'double' representing velocity of device in meters per second
    longitude: -122.406417, // position's longitude in decimal degrees
    latitude: 37.785834, // position's latitude in decimal degrees
    accuracy: 5, // accuracy of the latitude and longitude properties, expressed in meters
    heading: -1, // direction in which teh device is traveling, specified in degrees where 0 represents true north and direction is determined clockwise
    altitude: 0, // position's altitude in meters, relative to sea level
    altitudeAccuracy: -1 // accuracy of the altitude expressed in meters
  },
  timestamp: 1547693735626.584, // date and time with precision to the millisecond
  scans: [{ tagNumber: 24002, tagType: 'interior' }, { tagNumber: 22765, tagType: 'exterior' }]
};

const testingState = {
  appStatus: 'scanStarted',
  location: {
    speed: -1,
    longitude: -122.406417,
    latitude: 37.785834,
    accuracy: 5,
    heading: -1,
    altitude: 0,
    altitudeAccuracy: -1
  },
  scanCount: 3,
  scans: [
    { tagNumber: 56069, tagType: 'interior' },
    { tagNumber: 7186, tagType: 'exterior' },
    { tagNumber: 6127, tagType: 'interior' }
  ],
  timestamp: 1548391831698.702
};
