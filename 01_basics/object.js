// object concatenation
// object destructor
const course = {
    id : 1,
    courseIns : "Kp Singh",
}

console.log(course.courseIns)
const{courseIns : teacher} = course;
console.log(teacher);


// API 
// https://api.github.com/users/shivangi806


// a sample api response

{
    "results": [
      {
        "gender": "male",
        "name": {
          "title": "Mr",
          "first": "Isaac",
          "last": "Rhodes"
        },
        "location": {
          "street": {
            "number": 8755,
            "name": "Spring St"
          },
          "city": "Shepparton",
          "state": "Australian Capital Territory",
          "country": "Australia",
          "postcode": 4683,
          "coordinates": {
            "latitude": "-83.2078",
            "longitude": "-11.9715"
          },
          "timezone": {
            "offset": "+6:00",
            "description": "Almaty, Dhaka, Colombo"
          }
        },
        "email": "isaac.rhodes@example.com",
        "login": {
          "uuid": "6ccecc04-50ff-4d29-bfc9-b94fe934cb5f",
          "username": "smallmouse719",
          "password": "vectra",
          "salt": "wb782jK9",
          "md5": "6c5d5d5b7050bd11f9eab484e2fbb8a9",
          "sha1": "ea02bc69f6df2eb57747025e44b5c2c142159fd1",
          "sha256": "25db9cd661266cf43b3a8fd0d741d44fab83186ce92ea74317c3451e371c08ec"
        },
        "dob": {
          "date": "1979-12-27T22:48:13.583Z",
          "age": 44
        },
        "registered": {
          "date": "2007-04-22T13:53:43.648Z",
          "age": 16
        },
        "phone": "09-5227-7391",
        "cell": "0420-108-036",
        "id": {
          "name": "TFN",
          "value": "691133759"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/99.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/99.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg"
        },
        "nat": "AU"
      }
    ],
    "info": {
      "seed": "c5567aa2ba718b29",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }