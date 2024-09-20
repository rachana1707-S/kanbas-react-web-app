import React, { useState } from 'react';

export default function CourseStatus() {
  const [published, setPublished] = useState(false);

  const handlePublish = () => {
    setPublished(true);
  };

  const handleUnpublish = () => {
    setPublished(false);
  };

  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button onClick={handleUnpublish} disabled={!published}>Unpublish</button>
      <button onClick={handlePublish} disabled={published}>Publish</button>
      <button>Import Existing Content</button>
      <button>Import from Commons</button>
      <button>Choose Home Page</button>
      <button>View Course Stream</button>
      <button>New Announcement</button>
      <button>New Analytics</button>
      <button>View Course Notifications</button>
    </div>
  );
}
