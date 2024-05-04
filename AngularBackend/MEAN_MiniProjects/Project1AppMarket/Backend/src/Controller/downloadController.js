const downloadServices = require('../Services/downloadServices');


exports.getAllDownloads = async (req, res) => {
    try {
    //    console.log(req.user.id);
        const download = await downloadServices.getDownloads(req.user._id);
        if(!download){
            res.json("download not found");

        }
        res.json(download);
    } catch (error) {
        res.json({ message: error.message });
    }
}

exports.addToDownload = async (req, res) => {
    try {
        const download = await downloadServices.addtoDownloads(req.user._id,req.params.id);
        if(!download){
            res.json("download not found");

        }
        res.json(download);
    } catch (error) {
        res.json({ message: error.message });
    }
}
exports.removeFromDownload = async (req, res) => {
    try {
        const download = await downloadServices.removefromDownloads(req.user._id,req.params.id);
        if(!download){
            res.json("download not found");

        }
        res.json(download);
    } catch (error) {
        res.json({ message: error.message });
    }
}



