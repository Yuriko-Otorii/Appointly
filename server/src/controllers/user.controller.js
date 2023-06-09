const {
  fetchAppointment,
  setAvailability,
  rescheduleMtg,
  deleteAppointment,
  fetchUserAvailability,
  updateUsername,
  updatePassward,
} = require("../middleware/user.service");

exports.fetchAppointmentController = async (req, res) => {
  const { uid } = req.params;
  const allAppointments = await fetchAppointment(uid);
  return res.json(allAppointments);
};

exports.fetchAvailabilityController = async (req, res) => {
  const { uid } = req.params;
  const userAvailability = await fetchUserAvailability(uid);
  return res.json(userAvailability);
};

exports.setAvailabilityController = async (req, res) => {
  try {
    const { uid } = req.params;
    const newAvailability = await setAvailability(uid, req.body);
    return res.json(newAvailability);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ errorMessage: "Something went wrong. Please try again." });
  }
};

exports.rescheduleMtgController = async (req, res) => {
  try {
    const { appointmentid } = req.params;
    const changedMtg = await rescheduleMtg(appointmentid, req.body);
    return res.json(changedMtg);
  } catch (error) {
    return res
      .status(400)
      .send({ errorMessage: "Something went wrong. Please try again." });
  }
};

exports.deleteMtgController = async (req, res) => {
  try {
    const { appointmentid } = req.params;
    const newObj = await deleteAppointment(appointmentid);
    return res.json(newObj)
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ errorMessage: "Something went wrong. Please try again." });
  }
};

exports.updateUserInfoController = async (req, res) => {
  try {
    const { uid } = req.params;
    const newUserInfo = await updateUsername(uid, req.body);
    return res.json(newUserInfo);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ errorMessage: "Something went wrong. Please try again." });
  }
};

exports.updatePasswordController = async (req, res) => {
  try {
    const { uid } = req.params;
    const newUserInfo = await updatePassward(uid, req.body);
    return res.json(newUserInfo);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .send({ errorMessage: "Something went wrong. Please try again." });
  }
};
