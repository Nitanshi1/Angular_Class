const downloadServices = require('../Services/downloadServices');



exports.addToDownload = async (req, res) => {
    try {
        const { email, appId } = req.body;
        await addToDownload(email, appId);
        res.status(201).json({ message: 'Application added to download successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteFromDownload = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteFromDownload(id);
        res.json({ message: 'Application deleted from download successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.uninstallApp = async (req, res) => {
    try {
        const { userId, appId } = req.params;
        await uninstallApp(userId, appId);
        res.json({ message: 'Application uninstalled successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getAllDownloadedApps = async (req, res) => {
    try {
        const { userId } = req.params;
        const downloadedApps = await getAllDownloadedApps(userId);
        res.json(downloadedApps);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
