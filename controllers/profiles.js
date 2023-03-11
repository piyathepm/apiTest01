//@desc     Get all profiles
//@route    Get /api/v1/profiles
//@access   Public
exports.getProfiles = (req, res, next) => {
    res.status(200).json({
        success: true,
        msg: 'Show all profiles'
    });
}