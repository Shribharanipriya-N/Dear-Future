const Letter=require('../model/LetterModel')
const {v4}=require('uuid');

const addLetter = async (req, res) => {
    const { userid, title, body, time, date, imageurl, fileurl } = req.body;

    try {

        const newLetter = new Letter({
            userid,
            title,
            letterid: v4(),
            body,
            time,
            date,
            imageurl,
            fileurl
        });

        await newLetter.save();
        return res.status(201).json({ message: 'Letter added successfully', letter: newLetter });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to add letter', error });
    }
};

const updateLetter = async (req, res) => {
    const { letterid } = req.params;
    const updates = req.body;

    try {
        const updatedLetter = await Letter.findOneAndUpdate(
            { letterid:letterid },
            { ...updates },
            { new: true }
        );

        if (!updatedLetter) {
            return res.status(404).json({ message: 'Letter not found' });
        }

        return res.status(200).json({ message: 'Letter updated successfully', letter: updatedLetter });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to update letter', error });
    }
};

const deleteLetter = async (req, res) => {
    const { letterid } = req.params;
  console.log("id",letterid)
    try {
        const deletedLetter = await Letter.findOneAndDelete({ letterid });

        if (!deletedLetter) {
            return res.status(404).json({ message: 'Letter not found' });
        }

        return res.status(200).json({ message: 'Letter deleted successfully', letter: deletedLetter });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to delete letter', error });
    }
};

const getletters=async(req,res)=>{
    const { userid } = req.params;

    try {
        const userLetters = await Letter.find({ userid });

        if (!userLetters || userLetters.length === 0) {
            return res.status(404).json({ message: 'No letters found for this user' });
        }

        return res.status(200).json({ message: 'Letters retrieved successfully', letters: userLetters });
    } catch (error) {
        return res.status(500).json({ message: 'Failed to retrieve letters', error });
    }
}
module.exports = { addLetter, updateLetter, deleteLetter,getletters };