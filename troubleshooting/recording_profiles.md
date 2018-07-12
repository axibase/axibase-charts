# Portal Performance Diagnostics

## Overview

The following instructions outline steps required to record JavaScript timelines and resource usage in ATSD portals.

## Google Chrome

### Capturing Performance Profile

* Open an ATSD portal.

* Click `F12` on Windows or `Command+Option+I` on Mac to open Developer Tools.

* Open the **Performance** panel.

  ![](images/performance_panel.png)

* Click the **Record** circle icon ![](images/record_button.png) in the top left bar to initiate a profiling session.

* Execute the steps that typically cause performance issues such as load page, open dialog chart, open controls.

* Click **Stop** to discontinue recording the session.

* Click **Down Arrow** icon ![](images/arrow-down_saving_button.png) in the top toolbar to save profile to a JSON file

### Capturing Memory Profile

* Open an ATSD portal.

* Click `F12` on Windows or `Command+Option+I` on Mac to open Developer Tools.

* Open the **Memory** panel.

  ![](images/memory_panel.png)

* Click **Record allocation timeline** button.

* Click **Start** button.

* Execute the steps that typically cause performance issues such as load page, open dialog chart, open controls.

* Click the red **Record** circle ![](images/red_record_button.png) to stop recording the session.

* Click  **Save** to save profile to a `heaptimeline` file.

  ![](images/memory_profile_save.png)
