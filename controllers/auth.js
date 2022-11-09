import User from "../models/user.js";
import Venue from "../models/venues.js";

//signin for players
export const signin = async (req, res) => {
  //console.log(req.body);
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.json({
      error: "No user found",
    });
  }
  // check password
  if (password !== user.password) {
    return res.json({
      error: "Wrong password",
    });
  }
  user.password = undefined;
  res.json({
    user,
  });
};

//This was used to created the two players {player01 and player02}
// export const signup = async (req, res) => {
//   // console.log(req.body);
//   const { username, password } = req.body;
//   const user = await new User({
//     username,
//     password,
//   }).save();
//   return res.status(200).send("Created!!");
// };

//for admin to add venues
export const addVenue = async (req, res) => {
  //console.log(req.body);
  const { admin, name } = req.body;
  if (admin !== "admin") {
    return res.status(400).send("Unauthorized access");
  }
  await new Venue({
    name,
  }).save();
  return res.status(200).send("Created!!");
};

export const allVenue = async (req, res) => {
  //console.log(req.body);
  const venue = await Venue.find().sort({ createdAt: -1 });
  //console.log(venue);
  res.json(venue);
};

//When player press make fav
export const addFav = async (req, res) => {
  // console.log(req.body);
  const { name, user } = req.body;
  try {
    const venuev = await Venue.findOne({ name });
    //console.log(venuev._id);
    const useru = await User.findOneAndUpdate(
      { username: user },
      { $set: { favVenue: venuev } },
      {
        new: true,
      }
    );
    //console.log(useru.favVenue);
    //res.json(useru);
    res.json("Added!");
  } catch (e) {
    console.log(e);
  }

  //console.log(user, venue);
};

export const removeFav = async (req, res) => {
  //console.log(req.body);
  try {
    const user = await User.findOneAndUpdate(
      { user: req.body.user },
      { $set: { favVenue: null } }
    );
    res.json(user);
  } catch (e) {
    console.log(e);
  }

  //console.log(user, venue);
};

export const userInfo = async (req, res) => {
  console.log(req.body);
  try {
    const { user } = req.body;
    const userv = await User.findOne({ username: user });
    res.json(userv);
  } catch (e) {
    console.log(e);
  }

  //console.log(user, venue);
};
