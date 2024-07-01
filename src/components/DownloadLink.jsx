import React from 'react';

function DownloadLink({ fileName, fileUrl }) {
  return (
    <a href={fileUrl} download={fileName}>
      Download {fileName}
    </a>
  );
}

export default DownloadLink;