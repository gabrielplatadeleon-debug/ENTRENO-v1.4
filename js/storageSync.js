const StorageSync = {
  getLogs(profile) {
    const saved = localStorage.getItem(`entreno_logs_${profile}`);
    if (saved) {
      try { return JSON.parse(saved); } catch(e) { return {}; }
    }
    return {};
  },
  
  saveLogs(profile, logs) {
    localStorage.setItem(`entreno_logs_${profile}`, JSON.stringify(logs));
  },

  async syncToCloud(accessToken, profile, logs, setSyncStatus) {
    if (!accessToken) return;
    setSyncStatus("Sincronizando con Drive...");
    try {
      const fileContent = JSON.stringify({ profile, logs, updatedAt: new Date().toISOString() }, null, 2);
      const fileName = `entreno_backup_${profile}.json`;

      const searchRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=name='${fileName}' and mimeType='application/json'`, {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      const searchData = await searchRes.json();

      if (searchData.files && searchData.files.length > 0) {
        const fileId = searchData.files[0].id;
        await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
          method: 'PATCH',
          headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
          body: fileContent
        });
      } else {
        const metadata = { name: fileName, mimeType: 'application/json' };
        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', new Blob([fileContent], { type: 'application/json' }));

        await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
          method: 'POST',
          headers: { Authorization: `Bearer ${accessToken}` },
          body: form
        });
      }
      setSyncStatus("Sincronizado ✔️");
    } catch (err) {
      setSyncStatus("Error Drive ⚠️");
    }
  }
};
